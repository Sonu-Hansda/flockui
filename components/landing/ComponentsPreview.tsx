import Link from "next/link";
import { ChevronRight } from "lucide-react";

const categories = [
  { name: "Buttons", count: 12, tag: "Elements", color: "bg-flutter-blue/10 text-flutter-blue border-flutter-blue/20" },
  { name: "Cards", count: 8, tag: "Layout", color: "bg-flutter-purple/10 text-flutter-purple border-flutter-purple/20" },
  { name: "Text Fields", count: 15, tag: "Forms", color: "bg-flutter-red/10 text-flutter-red border-flutter-red/20" },
  { name: "Navigation", count: 5, tag: "Structure", color: "bg-flutter-green/10 text-flutter-green border-flutter-green/20" },
  { name: "Modals", count: 4, tag: "Overlays", color: "bg-flutter-sky/10 text-flutter-sky border-flutter-sky/20" },
  { name: "Avatars & Chips", count: 6, tag: "Elements", color: "bg-flutter-navy/10 text-flutter-navy dark:text-flutter-sky border-flutter-navy/20" },
];

export default function ComponentsPreview() {
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-slate-950 py-24 border-t border-slate-100 dark:border-slate-700/50 transition-colors duration-200">
      {/* Dark mode glow only — no dot grid */}
      <div className="hidden dark:block pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-flutter-sky/10 blur-3xl" />
      <div className="hidden dark:block pointer-events-none absolute left-0 bottom-0 h-64 w-64 rounded-full bg-flutter-green/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-flutter-blue dark:text-flutter-sky mb-3">Components</p>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">
              Start with what you need
            </h2>
          </div>
          <Link
            href="/components"
            className="text-sm font-bold text-flutter-blue dark:text-flutter-sky hover:text-flutter-navy dark:hover:text-white transition-colors"
          >
            View all components →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href="/components"
              className="group flex items-center justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 backdrop-blur-sm p-5 hover:border-flutter-blue dark:hover:border-flutter-blue/50 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-4">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl border text-xs font-black ${cat.color}`}>
                  {cat.count}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-flutter-blue dark:group-hover:text-flutter-sky transition-colors">{cat.name}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">{cat.tag}</p>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-slate-300 dark:text-slate-600 group-hover:text-flutter-blue dark:group-hover:text-flutter-sky group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
