"use client";

import Image from "next/image";
import Link from "next/link";
import SearchModal from "@/components/SearchModal";
import ThemeToggle from "@/components/ThemeToggle";
import GithubStars from "@/components/GithubStars";
import { FaGithub } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-700/40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Left — Logo only */}
        <Link href="/" className="flex items-center">
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
          <ThemeToggle />

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
        </div>
      </div>
    </nav>
  );
}
