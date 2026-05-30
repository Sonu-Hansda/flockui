import Link from "next/link";
import { ChevronRight, LayoutGrid, Square, Type, Menu, SquareStack, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import fs from "fs";
import path from "path";
import { componentMeta } from "@/lib/component-meta";

function getRegistryComponents() {
  const registryPath = path.join(process.cwd(), "registry");

  if (!fs.existsSync(registryPath)) return [];

  const components = fs.readdirSync(registryPath).filter((item) => {
    return fs.statSync(path.join(registryPath, item)).isDirectory();
  });

  return components.map((component) => {
    const componentPath = path.join(registryPath, component);
    const variants = fs.readdirSync(componentPath).filter((item) => {
      return fs.statSync(path.join(componentPath, item)).isDirectory();
    });
    return { slug: component, variantCount: variants.length };
  });
}

function getStylesForTag(tag: string) {
  switch (tag) {
    case "Layout":
      return {
        icon: <LayoutGrid className="h-4 w-4" />,
        gradient: "from-flutter-purple/20 to-transparent",
        border: "border-flutter-purple/20 group-hover:border-flutter-purple/40",
        text: "text-flutter-purple dark:text-purple-300",
      };
    case "Forms":
      return {
        icon: <Type className="h-4 w-4" />,
        gradient: "from-flutter-red/20 to-transparent",
        border: "border-flutter-red/20 group-hover:border-flutter-red/40",
        text: "text-flutter-red dark:text-red-300",
      };
    case "Structure":
      return {
        icon: <Menu className="h-4 w-4" />,
        gradient: "from-flutter-green/20 to-transparent",
        border: "border-flutter-green/20 group-hover:border-flutter-green/40",
        text: "text-flutter-green dark:text-emerald-300",
      };
    case "Overlays":
      return {
        icon: <SquareStack className="h-4 w-4" />,
        gradient: "from-accent-cyan/20 to-transparent",
        border: "border-accent-cyan/20 group-hover:border-accent-cyan/40",
        text: "text-accent-cyan dark:text-cyan-300",
      };
    case "Feedback":
      return {
        icon: <Users className="h-4 w-4" />,
        gradient: "from-flutter-navy/20 to-transparent",
        border: "border-flutter-navy/20 group-hover:border-flutter-navy/40",
        text: "text-flutter-navy dark:text-flutter-sky",
      };
    case "Elements":
    default:
      return {
        icon: <Square className="h-4 w-4" />,
        gradient: "from-flutter-blue/20 to-transparent",
        border: "border-flutter-blue/20 group-hover:border-flutter-blue/40",
        text: "text-flutter-blue dark:text-flutter-sky",
      };
  }
}

export default function ComponentsPreview() {
  const registryComponents = getRegistryComponents();

  const categories = registryComponents.map((comp) => {
    const meta = componentMeta[comp.slug] ?? {
      name: comp.slug.charAt(0).toUpperCase() + comp.slug.slice(1),
      tag: "Component",
    };
    const styles = getStylesForTag(meta.tag);

    return {
      name: meta.name,
      slug: comp.slug,
      count: comp.variantCount,
      tag: meta.tag,
      ...styles,
    };
  });

  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-slate-950 py-24 border-t border-slate-100 dark:border-slate-700/50 transition-colors duration-200">
      {/* Dark mode glow */}
      <div className="hidden dark:block pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-flutter-sky/8 blur-3xl" />
      <div className="hidden dark:block pointer-events-none absolute left-0 bottom-0 h-64 w-64 rounded-full bg-flutter-green/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                  Ready to use
                </span>
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
                Grab what you need
              </h2>
            </div>
            <Link
              href="/components"
              className="group inline-flex items-center gap-1.5 text-sm font-bold text-flutter-blue dark:text-flutter-sky hover:text-flutter-navy dark:hover:text-white transition-colors"
            >
              View all components
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Category grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.name} delay={i + 1}>
              <Link
                href={`/components/${cat.slug}`}
                className={`group relative flex items-center justify-between rounded-2xl border ${cat.border} bg-white dark:bg-slate-900/80 backdrop-blur-sm p-5 hover:shadow-lg transition-all overflow-hidden`}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border ${cat.border.replace("group-hover:", "")} bg-white dark:bg-slate-800 ${cat.text} shadow-sm transition-colors`}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <p
                      className={`text-sm font-bold text-slate-900 dark:text-slate-100 transition-colors`}
                    >
                      {cat.name}
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                      {cat.count} components &middot; {cat.tag}
                    </p>
                  </div>
                </div>
                <ChevronRight className={`relative z-10 h-4 w-4 text-slate-300 dark:text-slate-600 group-hover:translate-x-0.5 transition-all`} />
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={4}>
          <div className="mt-10 text-center">
            <Link
              href="/components"
              className="group inline-flex h-11 items-center gap-2 rounded-xl bg-flutter-navy dark:bg-flutter-blue px-7 text-sm font-bold text-white hover:bg-flutter-blue dark:hover:bg-flutter-sky transition-all shadow-lg shadow-flutter-blue/20 hover:shadow-xl hover:shadow-flutter-blue/30 hover:-translate-y-0.5"
            >
              Browse Components
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
