import Link from "next/link";
import { ChevronRight, LayoutGrid, Square, Type, Menu, SquareStack, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { componentMeta } from "@/lib/component-meta";
import { getRegistryComponents } from "@/lib/get-registry-components";


function getStylesForTag(tag: string) {
  switch (tag) {
    case "Layout":
      return {
        icon: <LayoutGrid className="h-4 w-4" />,
        gradient: "from-flutter-purple/20 to-transparent",
        border: "border-flutter-purple/20 group-hover:border-flutter-purple/40",
        text: "text-flutter-purple ",
      };
    case "Forms":
      return {
        icon: <Type className="h-4 w-4" />,
        gradient: "from-flutter-red/20 to-transparent",
        border: "border-flutter-red/20 group-hover:border-flutter-red/40",
        text: "text-flutter-red ",
      };
    case "Structure":
      return {
        icon: <Menu className="h-4 w-4" />,
        gradient: "from-flutter-green/20 to-transparent",
        border: "border-flutter-green/20 group-hover:border-flutter-green/40",
        text: "text-flutter-green ",
      };
    case "Overlays":
      return {
        icon: <SquareStack className="h-4 w-4" />,
        gradient: "from-accent-cyan/20 to-transparent",
        border: "border-accent-cyan/20 group-hover:border-accent-cyan/40",
        text: "text-accent-cyan ",
      };
    case "Feedback":
      return {
        icon: <Users className="h-4 w-4" />,
        gradient: "from-flutter-navy/20 to-transparent",
        border: "border-flutter-navy/20 group-hover:border-flutter-navy/40",
        text: "text-flutter-navy ",
      };
    case "Elements":
    default:
      return {
        icon: <Square className="h-4 w-4" />,
        gradient: "from-flutter-blue/20 to-transparent",
        border: "border-flutter-blue/20 group-hover:border-flutter-blue/40",
        text: "text-flutter-blue ",
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
    <section className="relative w-full overflow-hidden bg-white py-24 border-t border-slate-100 transition-colors duration-200">
      {/* Dark mode glow */}
      <div className="hidden pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-flutter-sky/8 blur-3xl" />
      <div className="hidden pointer-events-none absolute left-0 bottom-0 h-64 w-64 rounded-full bg-flutter-green/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs text-slate-400 font-medium">
                  Ready to use
                </span>
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
                Grab what you need
              </h2>
            </div>
            <Link
              href="/components"
              className="group inline-flex items-center gap-1.5 text-sm font-bold text-flutter-blue hover:text-flutter-navy transition-colors"
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
                className={`group relative flex items-center justify-between rounded-2xl border ${cat.border} bg-white backdrop-blur-sm p-5 hover:shadow-lg transition-all overflow-hidden`}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`pointer-events-none absolute inset-0 bg-linear-to-br ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border ${cat.border.replace("group-hover:", "")} bg-white ${cat.text} shadow-sm transition-colors`}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <p
                      className={`text-sm font-bold text-slate-900 transition-colors`}
                    >
                      {cat.name}
                    </p>
                    <p className="text-xs text-slate-400 font-medium">
                      {cat.count} components &middot; {cat.tag}
                    </p>
                  </div>
                </div>
                <ChevronRight className={`relative z-10 h-4 w-4 text-slate-300 group-hover:translate-x-0.5 transition-all`} />
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={4}>
          <div className="mt-10 text-center">
            <Link
              href="/components"
              className="group inline-flex h-11 items-center gap-2 rounded-xl bg-flutter-navy px-7 text-sm font-bold text-white hover:bg-flutter-blue transition-all shadow-lg shadow-flutter-blue/20 hover:shadow-xl hover:shadow-flutter-blue/30 hover:-translate-y-0.5"
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
