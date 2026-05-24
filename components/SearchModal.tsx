"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { Search, ChevronRight } from "lucide-react";

import Link from "next/link";

const links = [
  { label: "Buttons", href: "/components/button", category: "Components" },
  { label: "Navigation", href: "/components/navigation", category: "Components" },
  { label: "Toasts", href: "/components/toast", category: "Components" },
  { label: "Getting Started", href: "/docs", category: "Docs" },
  { label: "Contributing", href: "/docs/contribution", category: "Docs" },
];

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const filtered = query.trim()
    ? links.filter((l) =>
        l.label.toLowerCase().includes(query.toLowerCase()) ||
        l.category.toLowerCase().includes(query.toLowerCase())
      )
    : links;

  const handleOpen = useCallback(() => {
    setOpen(true);
    setQuery("");
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        handleOpen();
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleOpen]);

  const overlay = (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        display: "flex", alignItems: "flex-start", justifyContent: "center",
        paddingTop: "100px",
        background: "rgba(15, 23, 42, 0.45)",
        backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)",
      }}
      onClick={() => setOpen(false)}
    >
      <div className="search-dialog mx-4 w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-700 px-4 py-3">
          <Search className="h-4 w-4 text-slate-400 dark:text-slate-500 shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Search components, docs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none"
          />
          <kbd>Esc</kbd>
        </div>

        <div className="max-h-80 overflow-y-auto py-2">
          {filtered.length === 0 ? (
            <p className="px-4 py-6 text-center text-sm text-slate-400 dark:text-slate-500">No results found.</p>
          ) : (
            filtered.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between px-4 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group"
              >
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-flutter-blue dark:group-hover:text-flutter-sky">{item.label}</span>
                <span className="text-xs text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full">{item.category}</span>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop trigger */}
      <button
        id="search-trigger"
        onClick={handleOpen}
        className="hidden sm:flex items-center gap-2 h-9 w-60 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 text-sm text-slate-400 dark:text-slate-500 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
      >
        <Search className="h-4 w-4 shrink-0" />
        <span className="flex-1 text-left">Search</span>
        <kbd>Ctrl K</kbd>
      </button>

      {/* Mobile icon */}
      <button onClick={handleOpen} className="sm:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
        <Search className="h-4 w-4 text-slate-500" />
      </button>

      {mounted && open && createPortal(overlay, document.body)}
    </>
  );
}
