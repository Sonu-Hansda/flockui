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
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-xl transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Left — Logo only */}
        <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
          <Image
            src="/logo-light.png"
            alt="FlockUI"
            width={110}
            height={36}
            className="h-8 w-auto object-contain"
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
            className="hidden sm:flex items-center gap-2 h-9 rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all hover:-translate-y-0.5"
          >
            <FaGithub className="h-4 w-4" />
            <span>GitHub</span>
            <GithubStars />
          </a>

          <a
            href="https://ko-fi.com/sonuhansda"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 h-9 rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all hover:-translate-y-0.5"
          >
            <Image
              src="https://storage.ko-fi.com/cdn/logomarkLogo.png"
              alt="Ko-fi"
              width={16}
              height={16}
              className="h-4 w-4"
            />
            <span>Support</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="sm:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`sm:hidden grid transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "grid-rows-[1fr] opacity-100 border-t border-slate-200/80"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="bg-white px-4 py-4 space-y-3">
            <Link
              href="/components"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Components
            </Link>
            <Link
              href="/docs"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Docs
            </Link>
            <div className="h-px bg-slate-200/80 my-2" />
            <a
              href="https://github.com/Sonu-Hansda/flockui"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 w-full rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <FaGithub className="h-4 w-4 text-slate-500" />
              <span>GitHub</span>
              <GithubStars />
            </a>
            <a
              href="https://ko-fi.com/sonuhansda"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 w-full rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <Image
                src="https://storage.ko-fi.com/cdn/logomarkLogo.png"
                alt="Ko-fi"
                width={16}
                height={16}
                className="h-4 w-4"
              />
              <span>Support on Ko-fi</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
