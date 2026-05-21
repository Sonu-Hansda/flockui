import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { ArrowRight, Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function CtaSection() {
  return (
    <section className="relative w-full overflow-hidden bg-flutter-navy py-24 sm:py-32 border-t border-white/5">
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 animate-gradient"
          style={{
            background:
              "linear-gradient(135deg, #042B59 0%, #0553B1 25%, #042B59 50%, #027DFD 75%, #042B59 100%)",
            backgroundSize: "400% 400%",
          }}
        />
      </div>

      {/* Floating particles / stars */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle-drift ${8 + Math.random() * 12}s linear infinite`,
              animationDelay: `${Math.random() * 8}s`,
              opacity: 0,
            }}
          />
        ))}
      </div>

      {/* Glowing orb */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[400px] w-[400px] rounded-full bg-flutter-sky/10 blur-3xl animate-pulse-soft" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal>
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-semibold text-flutter-sky backdrop-blur-sm">
            <Star className="h-3.5 w-3.5" />
            Open source &middot; MIT License
          </div>

          {/* Headline with gradient text */}
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
            Ship faster with{" "}
            <span
              className="
                relative inline-block
                bg-linear-to-r from-flutter-sky via-flutter-purple to-accent-cyan
                bg-clip-text text-transparent
                [-webkit-text-stroke:1px_rgba(255,255,255,0.7)]
              "
            >
              FlockUI
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base text-slate-300 leading-relaxed">
            Browse the full component library, copy the code you need, and ship your next Flutter app faster &mdash; no strings attached.
          </p>

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
              className="group inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 text-sm font-semibold text-white hover:bg-white/10 transition-all backdrop-blur-sm hover:-translate-y-0.5"
            >
              <FaGithub className="h-4 w-4" />
              Star on GitHub
            </a>
            <a
              href="https://ko-fi.com/sonuhansda"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 text-sm font-semibold text-white hover:bg-white/10 transition-all backdrop-blur-sm hover:-translate-y-0.5"
            >
              <img
                src="https://storage.ko-fi.com/cdn/logomarkLogo.png"
                alt="Ko-fi"
                className="h-4 w-4"
              />
              Support on Ko-fi
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
