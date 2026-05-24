import { Package, Paintbrush2, Settings2, GitFork } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  {
    title: "Zero Dependencies",
    description:
      "No packages to install. Copy the Dart code directly into your project and you own it entirely. No version conflicts, no breaking changes.",
    icon: <Package className="h-5 w-5" />,
    gradient: "from-flutter-blue/20 via-flutter-sky/10 to-transparent",
    accent: "text-flutter-blue dark:text-flutter-sky",
    size: "large",
  },
  {
    title: "Beautiful by Default",
    description:
      "Every component follows Material Design 3 and Flutter best practices. Looks great from the first paste.",
    icon: <Paintbrush2 className="h-5 w-5" />,
    gradient: "from-flutter-purple/20 via-transparent to-transparent",
    accent: "text-flutter-purple dark:text-purple-300",
    size: "small",
  },
  {
    title: "Fully Customizable",
    description:
      "Since you own the code, every color, size, and behavior is yours to change without fighting an API.",
    icon: <Settings2 className="h-5 w-5" />,
    gradient: "from-accent-cyan/20 via-transparent to-transparent",
    accent: "text-accent-cyan dark:text-cyan-300",
    size: "small",
  },
  {
    title: "Open Source",
    description:
      "MIT licensed. Use in personal, commercial, or enterprise projects without restrictions. Built for the community, by the community.",
    icon: <GitFork className="h-5 w-5" />,
    gradient: "from-flutter-green/20 via-flutter-blue/5 to-transparent",
    accent: "text-flutter-green dark:text-emerald-300",
    size: "wide", // spans full width
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-900 py-24 transition-colors duration-200">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-flutter-blue/5 dark:bg-flutter-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-flutter-purple/5 dark:bg-flutter-purple/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-14 max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-flutter-blue/20 dark:border-flutter-sky/20 bg-flutter-blue/5 dark:bg-flutter-sky/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-flutter-blue dark:text-flutter-sky mb-4">
              Why FlockUI
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              Built different
            </h2>
            <p className="mt-4 text-base text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg">
              No wrappers, no config files, no version conflicts &mdash; just raw Flutter code you can trust.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const colSpan =
              f.size === "large"
                ? "lg:col-span-2"
                : f.size === "wide"
                  ? "lg:col-span-4"
                  : "lg:col-span-1";

            return (
              <ScrollReveal key={f.title} delay={i + 1}>
                <div
                  className={`group relative rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/60 p-6 sm:p-7 hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-600 hover:-translate-y-0.5 transition-all overflow-hidden ${colSpan}`}
                >
                  {/* Gradient overlay */}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <div
                      className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 ${f.accent} shadow-sm`}
                    >
                      {f.icon}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
