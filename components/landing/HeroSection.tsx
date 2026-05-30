import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden pt-24 pb-12 sm:pt-16 sm:pb-18">
      {/* Subtle gradient glow */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] ">
        <div
          className="absolute inset-0 animate-gradient"
          style={{
            background:
              "linear-gradient(135deg, #027DFD 0%, #6200EE 25%, #06B6D4 50%, #042B59 75%, #027DFD 100%)",
            backgroundSize: "400% 400%",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Headline */}
        <h1 className="text-5xl font-semibold tracking-tight text-slate-900 sm:text-7xl lg:text-8xl leading-[1.05]">
          Flutter components.
          <br />
          <span className="gradient-text">Copy. Paste. Ship.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-500 leading-relaxed">
          An open-source collection of high-quality Flutter UI components.
          Browse the preview, grab the code, and ship faster &mdash; no packages, no config, no friction.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/components"
            className="group inline-flex h-12 items-center gap-2 rounded-xl bg-flutter-navy px-7 text-sm font-bold text-white hover:bg-flutter-blue transition-all shadow-lg shadow-flutter-blue/20 hover:shadow-xl hover:shadow-flutter-blue/30 hover:-translate-y-0.5"
          >
            Browse Components
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/docs/contribution"
            className="group inline-flex h-12 items-center gap-2 rounded-xl border border-slate-200 bg-white/80 backdrop-blur-sm px-7 text-sm font-semibold text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all hover:-translate-y-0.5 shadow-sm"
          >
            <Code2 className="h-4 w-4" />
            Read the Docs
          </Link>
        </div>

        {/* Showcase image */}
        <div className="mt-16">
          <div className="relative mx-auto md:max-w-4xl bg-white shadow-none shadow-slate-200/50 overflow-hidden">
            <Image
              src="/hero_showcase.png"
              alt="Flutter UI component showcase"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 sm:gap-10">
          <p className="text-sm text-slate-400 font-medium">
            Free forever &middot; MIT License
          </p>
        </div>
      </div>
    </section>
  );
}
