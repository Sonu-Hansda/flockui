import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-slate-900 pt-24 pb-32 sm:pt-28 sm:pb-36 transition-colors duration-200">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.06]">
        <div
          className="absolute inset-0 animate-gradient"
          style={{
            background:
              "linear-gradient(135deg, #027DFD 0%, #6200EE 25%, #06B6D4 50%, #042B59 75%, #027DFD 100%)",
            backgroundSize: "400% 400%",
          }}
        />
      </div>

      <div
        className="dark:hidden pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
          opacity: 0.35,
        }}
      />

      <div className="hidden dark:block pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,125,253,0.08)_0%,transparent_60%)]" />

      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-125 w-125 sm:h-150 sm:w-150">
          <div className="absolute inset-0 rounded-full bg-linear-to-br from-flutter-sky/25 via-flutter-purple/20 to-accent-cyan/25 blur-3xl animate-pulse-soft dark:from-flutter-sky/30 dark:via-flutter-purple/25 dark:to-accent-cyan/30" />
          <div className="absolute inset-[15%] rounded-full bg-linear-to-br from-flutter-sky/15 via-flutter-blue/10 to-transparent blur-2xl animate-float-slow dark:from-flutter-sky/20 dark:via-flutter-blue/15" />
        </div>
      </div>

      <div className="pointer-events-none absolute right-[10%] top-[20%] hidden sm:block">
        <div className="h-16 w-16 rounded-full border border-flutter-sky/10 bg-flutter-sky/5 blur-sm animate-float-delayed dark:border-flutter-sky/20 dark:bg-flutter-sky/10" />
      </div>
      <div className="pointer-events-none absolute left-[8%] bottom-[25%] hidden sm:block">
        <div className="h-10 w-10 rounded-lg border border-flutter-purple/10 bg-flutter-purple/5 blur-sm animate-float dark:border-flutter-purple/20 dark:bg-flutter-purple/10" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-flutter-sky/20 dark:border-flutter-sky/30 bg-white/80 dark:bg-white/5 px-4 py-1.5 text-sm font-semibold text-flutter-blue dark:text-flutter-sky backdrop-blur-sm shadow-sm">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-flutter-sky animate-pulse" />
          Open Source &middot; Free to use
        </div>

        {/* Headline */}
        <h1 className="text-5xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-7xl lg:text-8xl leading-[1.05]">
          Flutter components.
          <br />
          <span className="gradient-text">Copy. Paste. Ship.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
          An open-source collection of high-quality Flutter UI components.
          Browse the preview, grab the code, and ship faster &mdash; no packages, no config, no friction.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/components"
            className="group inline-flex h-12 items-center gap-2 rounded-xl bg-flutter-navy dark:bg-flutter-blue px-7 text-sm font-bold text-white hover:bg-flutter-blue dark:hover:bg-flutter-sky transition-all shadow-lg shadow-flutter-blue/20 hover:shadow-xl hover:shadow-flutter-blue/30 hover:-translate-y-0.5"
          >
            Browse Components
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/docs/contribution"
            className="group inline-flex h-12 items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-7 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:-translate-y-0.5 shadow-sm"
          >
            <Code2 className="h-4 w-4" />
            Read the Docs
          </Link>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 sm:gap-10">
          <p className="text-sm text-slate-400 dark:text-slate-500 font-medium">
            Free forever &middot; MIT License
          </p>
        </div>
      </div>
    </section>
  );
}
