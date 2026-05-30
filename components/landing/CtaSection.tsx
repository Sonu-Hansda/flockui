import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function CtaSection() {
  return (
    <section className="relative w-full overflow-hidden bg-flutter-navy py-24 sm:py-32 border-t border-white/5">
      {/* Subtle static radial glow — no animation, just depth */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-125 w-125 rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Single very subtle floating ring */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full border border-white/3 animate-float-slow"
        />
      </div>

      {/* Decorative images — positioned relative to the section */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Window image — bottom left */}
        <div className="absolute -bottom-8 -left-10 -rotate-12 opacity-70 hidden lg:block">
          <Image
            src="/component_window.png"
            alt=""
            width={200}
            height={200}
            className="w-auto h-auto"
          />
        </div>

        {/* Rocket image — top right */}
        <div className="absolute top-4 -right-4 opacity-90 hidden lg:block -rotate-12">
          <Image
            src="/rocket.png"
            alt=""
            width={360}
            height={360}
            className="w-auto h-auto"
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        {/* Headline — staggered entrance */}
        <ScrollReveal delay={1}>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
            Ship faster with{" "}
            <span className="text-white/90 [text-shadow:0_0_40px_rgba(255,255,255,0.08)]">
              FlockUI
            </span>
          </h2>
        </ScrollReveal>

        {/* Subtext — staggered entrance */}
        <ScrollReveal delay={2}>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/50 leading-relaxed">
            Browse the full component library, copy the code you need, and ship
            your next Flutter app faster &mdash; no strings attached.
          </p>
        </ScrollReveal>

        {/* Buttons — staggered entrance */}
        <ScrollReveal delay={3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/components"
              className="group inline-flex h-12 items-center gap-2 rounded-xl bg-white px-8 text-sm font-bold text-flutter-navy hover:bg-slate-100 transition-all shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-white/20 hover:-translate-y-0.5"
            >
              Browse Components
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="https://github.com/Sonu-Hansda/flockui"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 bg-white/4 px-8 text-sm font-semibold text-white/80 hover:bg-white/10 hover:border-white/25 transition-all backdrop-blur-sm hover:-translate-y-0.5"
            >
              <FaGithub className="h-4 w-4" />
              Star on GitHub
            </a>
            <a
              href="https://ko-fi.com/sonuhansda"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 bg-white/4 px-8 text-sm font-semibold text-white/80 hover:bg-white/10 hover:border-white/25 transition-all backdrop-blur-sm hover:-translate-y-0.5"
            >
              <img
                src="https://storage.ko-fi.com/cdn/logomarkLogo.png"
                alt="Ko-fi"
                className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity"
              />
              Support on Ko-fi
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
