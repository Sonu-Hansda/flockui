import { ChevronRight } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Components | FlockUI",
  description: "Browse all available Flutter UI components. Preview, copy, and paste high-quality widgets into your Flutter apps.",
};
import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
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


export default function ComponentsPage() {
  const registryComponents = getRegistryComponents();

  const categories = registryComponents.map((comp) => {
    const meta = componentMeta[comp.slug] ?? {
      name: comp.slug.charAt(0).toUpperCase() + comp.slug.slice(1),
      tag: "Component",
      color:
        "bg-flutter-blue/10 text-flutter-blue border-flutter-blue/20",
    };
    return {
      slug: comp.slug,
      name: meta.name,
      tag: meta.tag,
      color: meta.color,
      count: comp.variantCount,
    };
  });

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-200">
      <div className="border-b border-slate-100 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-flutter-blue dark:text-flutter-sky mb-3">
            Library
          </p>
          <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white">
            Components
          </h1>
          <p className="mt-3 text-base text-slate-500 dark:text-slate-400 max-w-xl">
            Browse all available Flutter UI components. Click any
            category to see previews and copy the source code.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {categories.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-slate-400 dark:text-slate-500 text-sm">
              No components in registry yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/components/${cat.slug}`}
                className="group flex flex-col rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden hover:border-flutter-blue hover:shadow-md transition-all"
              >
                {/* Image preview */}
                <div className="relative aspect-video bg-slate-50 dark:bg-slate-900 overflow-hidden">
                  <Image
                    src={`/components/${cat.slug}.png`}
                    alt={cat.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Info footer */}
                <div className="flex items-center justify-between p-5">
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-flutter-blue dark:group-hover:text-flutter-sky transition-colors">
                      {cat.name}
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-medium mt-0.5">
                      {cat.tag}
                    </p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-300 dark:text-slate-600 group-hover:text-flutter-blue dark:group-hover:text-flutter-sky group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
