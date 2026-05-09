const sidebarLinks = [
  {
    group: "Getting Started",
    items: [
      { label: "Introduction", href: "/docs", active: true },
      { label: "Installation", href: "/docs" },
      { label: "Theming", href: "/docs" },
    ],
  },
  {
    group: "Core Concepts",
    items: [
      { label: "Design Principles", href: "/docs" },
      { label: "Accessibility", href: "/docs" },
      { label: "Contributing", href: "/docs" },
    ],
  },
];

export default function DocsSidebar() {
  return (
    <aside className="w-full md:w-60 flex-shrink-0">
      <nav className="sticky top-24 space-y-8">
        {sidebarLinks.map((section) => (
          <div key={section.group}>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
              {section.group}
            </p>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`block rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                      item.active
                        ? "bg-flutter-blue/8 dark:bg-flutter-sky/10 text-flutter-blue dark:text-flutter-sky font-semibold"
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
