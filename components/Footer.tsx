import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";

const footerLinks = {
  Components: [
    { label: "Buttons", href: "/components/button" },
    { label: "Navigation", href: "/components/navigation" },
    { label: "Toasts", href: "/components/toast" },
  ],
  Documentation: [
    { label: "Getting Started", href: "/docs" },
    { label: "Contribution", href: "/docs/contribution" },
  ],
  Legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center">
              <Image src="/logo-light.png" alt="FlockUI" width={110} height={36} className="h-7 w-auto object-contain" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500 ">
              An open-source library of copy-paste Flutter UI components. Build beautiful apps faster without heavy dependencies.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://github.com/Sonu-Hansda/flockui" target="_blank" rel="noopener noreferrer"
                aria-label="FlockUI on GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:border-flutter-blue hover:text-flutter-blue transition-colors">
                <FaGithub className="h-4 w-4" />
              </a>
              <a href="https://ko-fi.com/sonuhansda" target="_blank" rel="noopener noreferrer"
                aria-label="Support FlockUI on Ko-fi"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:border-flutter-blue hover:text-flutter-blue transition-colors">
                <Image src="https://storage.ko-fi.com/cdn/logomarkLogo.png" alt="Ko-fi" width={16} height={16} className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, items]) => (
            <div key={group}>
              <h3 className="text-sm font-bold text-slate-900 tracking-wide">{group}</h3>
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-slate-500 hover:text-flutter-blue transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-sm text-slate-400 ">
            &copy; {new Date().getFullYear()} FlockUI. Open source under the MIT License.
          </p>
          <p className="text-sm text-slate-400 ">Built for the Flutter community with ❤️</p>
        </div>
      </div>
    </footer>
  );
}
