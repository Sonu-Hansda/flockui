import { ChevronRight } from "lucide-react";

const categories = [
  { name: "Buttons", count: 12, tag: "Elements", color: "bg-flutter-blue/10 text-flutter-blue border-flutter-blue/20" },
  { name: "Cards", count: 8, tag: "Layout", color: "bg-flutter-purple/10 text-flutter-purple border-flutter-purple/20" },
  { name: "Text Fields", count: 15, tag: "Forms", color: "bg-flutter-red/10 text-flutter-red border-flutter-red/20" },
  { name: "Navigation", count: 5, tag: "Structure", color: "bg-flutter-green/10 text-flutter-green border-flutter-green/20" },
  { name: "Modals", count: 4, tag: "Overlays", color: "bg-flutter-sky/10 text-flutter-sky border-flutter-sky/20" },
  { name: "Avatars", count: 6, tag: "Elements", color: "bg-flutter-navy/10 text-flutter-navy border-flutter-navy/20" },
  { name: "Badges & Chips", count: 9, tag: "Elements", color: "bg-flutter-blue/10 text-flutter-blue border-flutter-blue/20" },
  { name: "Bottom Sheets", count: 4, tag: "Overlays", color: "bg-flutter-purple/10 text-flutter-purple border-flutter-purple/20" },
  { name: "Progress Bars", count: 7, tag: "Feedback", color: "bg-flutter-green/10 text-flutter-green border-flutter-green/20" },
];

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-200">
      <div className="border-b border-slate-100 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-flutter-blue dark:text-flutter-sky mb-3">Library</p>
          <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white">Components</h1>
          <p className="mt-3 text-base text-slate-500 dark:text-slate-400 max-w-xl">
            Browse all available Flutter UI components. Click any category to see previews and copy the source code.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#"
              className="group flex items-center justify-between rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 hover:border-flutter-blue hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-4">
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl border text-sm font-black ${cat.color}`}>
                  {cat.count}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-flutter-blue dark:group-hover:text-flutter-sky transition-colors">{cat.name}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-medium mt-0.5">{cat.tag}</p>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-slate-300 dark:text-slate-600 group-hover:text-flutter-blue dark:group-hover:text-flutter-sky group-hover:translate-x-0.5 transition-all" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
