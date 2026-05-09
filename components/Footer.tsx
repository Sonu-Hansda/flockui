import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

const footerLinks = {
  Components: [
    { label: "Buttons", href: "/components" },
    { label: "Cards", href: "/components" },
    { label: "Forms & Inputs", href: "/components" },
    { label: "Navigation", href: "/components" },
    { label: "Overlays", href: "/components" },
  ],
  Documentation: [
    { label: "Introduction", href: "/docs" },
    { label: "Installation", href: "/docs" },
    { label: "Theming", href: "/docs" },
    { label: "Accessibility", href: "/docs" },
  ],
  Legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-900 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center">
              <Image src="/logo-light.png" alt="FlockUI" width={110} height={36} className="h-7 w-auto object-contain dark:hidden" />
              <Image src="/logo-dark.png" alt="FlockUI" width={110} height={36} className="h-7 w-auto object-contain hidden dark:block" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500 dark:text-slate-400">
              An open-source library of copy-paste Flutter UI components. Build beautiful apps faster without heavy dependencies.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:border-flutter-blue hover:text-flutter-blue transition-colors">
                <FaGithub className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:border-flutter-blue hover:text-flutter-blue transition-colors">
                <FaXTwitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, items]) => (
            <div key={group}>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-wide">{group}</h3>
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-slate-500 dark:text-slate-400 hover:text-flutter-blue dark:hover:text-flutter-sky transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 dark:border-slate-700/50 pt-8 sm:flex-row">
          <p className="text-sm text-slate-400 dark:text-slate-500">
            &copy; {new Date().getFullYear()} FlockUI. Open source under the MIT License.
          </p>
          <p className="text-sm text-slate-400 dark:text-slate-500">Built for the Flutter community with ❤️</p>
        </div>
      </div>
    </footer>
  );
}
