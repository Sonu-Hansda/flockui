import { Package, Paintbrush2, Settings2, GitFork } from "lucide-react";

const features = [
  {
    title: "Zero Dependencies",
    description: "No packages to install. Copy the Dart code directly into your project and you own it entirely.",
    icon: <Package className="h-5 w-5" />,
    accent: "text-flutter-blue bg-flutter-blue/8",
  },
  {
    title: "Beautiful by Default",
    description: "Every component follows Material Design 3 and Flutter best practices. Looks great from the first paste.",
    icon: <Paintbrush2 className="h-5 w-5" />,
    accent: "text-flutter-purple bg-flutter-purple/8",
  },
  {
    title: "Fully Customizable",
    description: "Since you own the code, every color, size, and behavior is yours to change without fighting an API.",
    icon: <Settings2 className="h-5 w-5" />,
    accent: "text-flutter-green bg-flutter-green/8",
  },
  {
    title: "Open Source",
    description: "MIT licensed. Use in personal, commercial, or enterprise projects without restrictions.",
    icon: <GitFork className="h-5 w-5" />,
    accent: "text-flutter-red bg-flutter-red/8",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-900 py-24 transition-colors duration-200">
      {/* Dark mode accent glows only — no dot grid */}
      <div className="hidden dark:block pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-flutter-blue/15 blur-3xl" />
      <div className="hidden dark:block pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-flutter-purple/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-xl">
          <p className="text-sm font-bold uppercase tracking-widest text-flutter-blue dark:text-flutter-sky mb-3">Why FlockUI</p>
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">
            The component library that gets out of your way
          </h2>
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            No wrappers, no config files, no version conflicts — just raw Flutter code you can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/70 backdrop-blur-sm p-6 hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-600 hover:-translate-y-0.5 transition-all"
            >
              <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl ${f.accent}`}>
                {f.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
