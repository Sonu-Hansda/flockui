import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  {
    title: "Zero Dependencies",
    description:
      "No packages to install. Copy the Dart code directly into your project and you own it entirely. No version conflicts, no breaking changes.",
    image: "/zero_dep.png",
    gradient: "from-flutter-blue/20 via-flutter-sky/10 to-transparent",
    accent: "text-flutter-blue ",
    size: "large",
  },
  {
    title: "Beautiful by Default",
    description:
      "Every component follows Material Design 3 and Flutter best practices. Looks great from the first paste.",
    image: "/beautiful.png",
    gradient: "from-flutter-purple/20 via-transparent to-transparent",
    accent: "text-flutter-purple ",
    size: "small",
  },
  {
    title: "Fully Customizable",
    description:
      "Since you own the code, every color, size, and behavior is yours to change without fighting an API.",
    image: "/customizable.png",
    gradient: "from-accent-cyan/20 via-transparent to-transparent",
    accent: "text-accent-cyan ",
    size: "small",
  },
  {
    title: "Open Source",
    description:
      "MIT licensed. Use in personal, commercial, or enterprise projects without restrictions. Built for the community, by the community.",
    image: "/open_source.png",
    gradient: "from-flutter-green/20 via-flutter-blue/5 to-transparent",
    accent: "text-flutter-green ",
    size: "wide", // spans full width
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 pb-12 transition-colors duration-200">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-flutter-blue/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-flutter-purple/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-14 max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs text-slate-400 font-medium">
                What makes it different
              </span>
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
              Built different
            </h2>
            <p className="mt-4 text-base text-slate-500 leading-relaxed max-w-lg">
              No wrappers, no config files, no version conflicts &mdash; just raw Flutter code you can trust.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
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
                  className={`group relative rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 hover:shadow-lg hover:border-slate-300 hover:-translate-y-0.5 transition-all overflow-hidden h-full ${colSpan}`}
                >
                  {/* Gradient overlay */}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-linear-to-br ${f.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Full-width image */}
                  <div className="relative -mx-6 -mt-6 sm:-mx-7 sm:-mt-7 mb-5 overflow-hidden">
                    <Image
                      src={f.image}
                      alt={f.title}
                      width={800}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-base font-bold text-slate-900 ">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500 leading-relaxed">
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
