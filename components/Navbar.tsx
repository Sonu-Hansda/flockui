"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SearchModal from "@/components/SearchModal";
import GithubStars from "@/components/GithubStars";
import { FaGithub } from "react-icons/fa6";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-700/40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Left — Logo only */}
        <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
          <Image
            src="/logo-light.png"
            alt="FlockUI"
            width={110}
            height={36}
            className="h-8 w-auto object-contain dark:hidden"
            priority
          />
          <Image
            src="/logo-dark.png"
            alt="FlockUI"
            width={110}
            height={36}
            className="h-8 w-auto object-contain hidden dark:block"
            priority
          />
        </Link>

        {/* Right — Search, Icons */}
        <div className="flex items-center gap-2">
          <SearchModal />

          <a
            href="https://github.com/Sonu-Hansda/flockui"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:-translate-y-0.5"
          >
            <FaGithub className="h-4 w-4" />
            <span>GitHub</span>
            <GithubStars />
          </a>

          <a
            href="https://ko-fi.com/sonuhansda"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 h-9 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:-translate-y-0.5"
          >
            <img
              src="https://storage.ko-fi.com/cdn/logomarkLogo.png"
              alt="Ko-fi"
              className="h-4 w-4"
            />
            <span>Support</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200/80 dark:border-slate-700/40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl px-4 py-4 space-y-3">
          <Link
            href="/components"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            Components
          </Link>
          <Link
            href="/docs"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            Docs
          </Link>
          <div className="h-px bg-slate-200/80 dark:bg-slate-700/40 my-2" />
          <a
            href="https://github.com/Sonu-Hansda/flockui"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 w-full rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <FaGithub className="h-4 w-4" />
            <span>GitHub</span>
            <GithubStars />
          </a>
          <a
            href="https://ko-fi.com/sonuhansda"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 w-full rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <img
              src="https://storage.ko-fi.com/cdn/logomarkLogo.png"
              alt="Ko-fi"
              className="h-4 w-4"
            />
            <span>Support on Ko-fi</span>
          </a>
        </div>
      )}
    </nav>
  );
}
