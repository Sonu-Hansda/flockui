import { ChevronRight, Mail } from "lucide-react";
import type { Metadata } from 'next';
import Link from "next/link";
import Image from "next/image";
import { componentMeta } from "@/lib/component-meta";
import { getRegistryComponents } from "@/lib/get-registry-components";

export const metadata: Metadata = {
  title: "Components | FlockUI",
  description: "Browse all available Flutter UI components. Preview, copy, and paste high-quality widgets into your Flutter apps.",
};


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
    <div className="min-h-screen bg-white transition-colors duration-200">
      <div className="border-b border-slate-100 bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-flutter-blue mb-3">
            Library
          </p>
          <h1 className="text-5xl font-extrabold text-slate-900 ">
            Components
          </h1>
          <p className="mt-3 text-base text-slate-500 max-w-xl">
            Browse all available Flutter UI components. Click any
            category to see previews and copy the source code.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {categories.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-slate-400 text-sm">
              No components in registry yet.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/components/${cat.slug}`}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-flutter-blue hover:shadow-md transition-all"
                >
                  {/* Image preview */}
                  <div className="relative aspect-video bg-slate-50 overflow-hidden">
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
                      <p className="text-sm font-bold text-slate-900 group-hover:text-flutter-blue transition-colors">
                        {cat.name}
                      </p>
                      <p className="text-xs text-slate-400 font-medium mt-0.5">
                        {cat.tag}
                      </p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-flutter-blue group-hover:translate-x-0.5 transition-all" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Request a component */}
            <div className="mt-16 text-center border-t border-slate-100 pt-16">
              <h2 className="text-2xl font-bold text-slate-900 ">
                Don't see what you need?
              </h2>
              <p className="mt-2 text-sm text-slate-500 max-w-md mx-auto">
                We're always adding new components. Let us know what you're looking for and we'll prioritise it.
              </p>
              <a
                href="mailto:sonukumarhansda61@gmail.com?subject=Component Request&body=Hi FlockUI team,%0D%0A%0D%0AI'd like to request a new component:%0D%0A%0D%0AComponent Name: %0D%0ADescription: %0D%0AUse Case: %0D%0A%0D%0AThanks!"
                className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all"
              >
                <Mail className="h-4 w-4" />
                Request a Component
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
