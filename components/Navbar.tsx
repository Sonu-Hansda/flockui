import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import SearchModal from "@/components/SearchModal";
import ThemeToggle from "@/components/ThemeToggle";
import { Star } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-700/50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

        {/* Left — Logo + Nav links */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <Image src="/logo-light.png" alt="FlockUI" width={110} height={36} className="h-8 w-auto object-contain dark:hidden" priority />
            <Image src="/logo-dark.png" alt="FlockUI" width={110} height={36} className="h-8 w-auto object-contain hidden dark:block" priority />
          </Link>

          <div className="hidden md:flex md:items-center md:gap-1">
            <Link href="/components" className="rounded-md px-3 py-1.5 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors">
              Components
            </Link>
            <Link href="/docs" className="rounded-md px-3 py-1.5 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors">
              Docs
            </Link>
          </div>
        </div>

        {/* Right — Search, Icons */}
        <div className="flex items-center gap-2">
          <SearchModal />
          <ThemeToggle />

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            <FaGithub className="h-4 w-4" />
            <span>GitHub</span>
            <span className="flex items-center gap-0.5 text-xs text-slate-400 dark:text-slate-500">
              <Star className="h-3 w-3" />
              1.2k
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
