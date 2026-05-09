import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function CtaSection() {
  return (
    <section className="w-full border-t border-slate-100 dark:border-slate-700 bg-flutter-navy py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-flutter-sky">
          Open source · MIT License
        </div>
        <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Start building today
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-slate-300 leading-relaxed">
          Browse the full component library, copy the code you need, and ship your next Flutter app faster.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/components"
            className="inline-flex h-11 items-center rounded-xl bg-white px-8 text-sm font-bold text-flutter-navy hover:bg-slate-100 transition-colors shadow-sm"
          >
            Browse Components
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
          >
            <FaGithub className="h-4 w-4" />
            Star on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
