"use client";

import { Star } from "lucide-react";
import { useEffect, useState } from "react";

export default function GithubStars() {
  const [stars, setStars] = useState<string | null>(null);

  useEffect(() => {
    const CACHE_KEY = "flockui-gh-stars";
    const CACHE_TTL = 1000 * 60 * 60; // 1 hour

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
      .then((res) => res.json())
      .then((data) => {
        if (data.stargazers_count !== undefined) {
          const count = data.stargazers_count;
          const formatted = count >= 1000 ? (count / 1000).toFixed(1) + "k" : count.toString();
          setStars(formatted);
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify({ value: formatted, timestamp: Date.now() }));
          } catch {
            // Ignore localStorage errors
          }
        }
      })
      .catch(() => {
        // Fallback — silently fail
      });
  }, []);

  return (
    <span className="flex items-center gap-0.5 text-xs text-slate-400 dark:text-slate-500">
      <Star className="h-3 w-3" />
      {stars ?? <span className="h-3 w-6 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />}
    </span>
  );
}
