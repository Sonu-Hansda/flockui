"use client";

import { Star } from "lucide-react";
import { useEffect, useState } from "react";

export default function GithubStars() {
  const [stars, setStars] = useState<string | null>(null);

  useEffect(() => {
    const CACHE_KEY = "flockui-gh-stars";
    const CACHE_TTL = 1000 * 60 * 60; // 1 hour

    // Helper to get fallback cached value even if expired
    const getFallbackCache = () => {
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { value } = JSON.parse(cached);
          return value;
        }
      } catch {
        // Ignore
      }
      return null;
    };

    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { value, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_TTL) {
          setStars(value);
          return;
        }
      }
    } catch {
      // Ignore localStorage errors
    }

    fetch("https://api.github.com/repos/Sonu-Hansda/flockui")
      .then((res) => {
        if (!res.ok) {
          throw new Error("GitHub API error");
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.stargazers_count !== undefined) {
          const count = data.stargazers_count;
          const formatted = count >= 1000 ? (count / 1000).toFixed(1) + "k" : count.toString();
          setStars(formatted);
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify({ value: formatted, timestamp: Date.now() }));
          } catch {
            // Ignore localStorage errors
          }
        } else {
          // If response does not contain stargazers_count (e.g. rate limit error message)
          setStars(getFallbackCache() ?? "12");
        }
      })
      .catch(() => {
        // Fallback on network/fetch error
        setStars(getFallbackCache() ?? "12");
      });
  }, []);

  return (
    <span className="flex items-center gap-0.5 text-xs text-slate-400 ">
      <Star className="h-3 w-3" />
      {stars ?? <span className="h-3 w-6 animate-pulse rounded bg-slate-200 " />}
    </span>
  );
}
