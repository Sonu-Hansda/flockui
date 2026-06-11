import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/json-ld";

interface BreadcrumbItem {
  name: string;
  href: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ name: "Home", href: "/" }, ...items];

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(allItems)),
        }}
      />
      {/* Visual breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-1.5 text-sm text-slate-500">
          {allItems.map((item, i) => {
            const isLast = i === allItems.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {i > 0 && (
                  <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
                )}
                {isLast ? (
                  <span
                    className="font-medium text-slate-900"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-flutter-blue transition-colors"
                  >
                    {i === 0 ? (
                      <span className="flex items-center gap-1">
                        <Home className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only">
                          {item.name}
                        </span>
                      </span>
                    ) : (
                      item.name
                    )}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
