"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarLinks = [
  {
    group: "Getting Started",
    items: [
      { label: "Introduction", href: "/docs" },
      { label: "Contributing", href: "/docs/contribution" },
    ],
  },
];

export default function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full md:w-60 shrink-0">
      <nav className="sticky top-24 space-y-8">
        {sidebarLinks.map((section) => (
          <div key={section.group}>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
              {section.group}
            </p>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`block rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-flutter-blue/8 text-flutter-blue font-semibold"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 "
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
