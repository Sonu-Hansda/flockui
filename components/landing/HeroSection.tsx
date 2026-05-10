import Link from "next/link";

const badge = "Open Source · Free to use";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-slate-900 pt-20 pb-28 transition-colors duration-200">
      {/* Light mode dot grid */}
      <div
        className="dark:hidden pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.45,
        }}
      />
      {/* Dark mode dot grid */}
      <div
        className="hidden dark:block pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #475569 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.6,
        }}
      />
      {/* Dark mode glow */}
      <div className="hidden dark:block pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-flutter-blue/25 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-flutter-blue/20 dark:border-flutter-sky/20 bg-flutter-blue/5 dark:bg-flutter-sky/10 px-4 py-1.5 text-sm font-semibold text-flutter-blue dark:text-flutter-sky">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-flutter-sky" />
          {badge}
        </div>

        {/* Headline */}
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-7xl">
          Flutter UI,{" "}
          <span className="text-flutter-blue dark:text-flutter-sky">copy-paste</span>{" "}
          ready.
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
          FlockUI is an open-source collection of high-quality Flutter components. Browse the preview, grab the code, and ship faster.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/components"
            className="inline-flex h-11 items-center rounded-xl bg-flutter-navy dark:bg-flutter-blue px-7 text-sm font-bold text-white hover:bg-flutter-blue dark:hover:bg-flutter-sky transition-colors shadow-sm"
          >
            Browse Components →
          </Link>
          <Link
            href="/docs"
            className="inline-flex h-11 items-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-7 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            Read the Docs
          </Link>
        </div>

        <p className="mt-10 text-sm text-slate-400 dark:text-slate-500 font-medium">
          Free forever · MIT License · Used by Flutter developers worldwide
        </p>
      </div>
    </section>
  );
}
