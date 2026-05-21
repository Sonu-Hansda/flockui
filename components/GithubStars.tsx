"use client";

import { Star } from "lucide-react";
import { useEffect, useState } from "react";

export default function GithubStars() {
  const [stars, setStars] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/Sonu-Hansda/flockui")
      .then((res) => res.json())
      .then((data) => {
        if (data.stargazers_count !== undefined) {
          const count = data.stargazers_count;
          if (count >= 1000) {
            setStars((count / 1000).toFixed(1) + "k");
          } else {
            setStars(count.toString());
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
