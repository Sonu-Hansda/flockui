import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white px-4 text-center">
      <div className="relative mb-8">
        <span className="text-[10rem] font-black text-slate-100 leading-none select-none">
          404
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-24 w-24 rounded-full bg-flutter-blue/10 flex items-center justify-center">
            <span className="text-4xl">🐦</span>
          </div>
        </div>
      </div>

      <h1 className="text-2xl font-extrabold text-slate-900 mb-3">
        Page not found
      </h1>
      <p className="text-base text-slate-500 max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="group inline-flex h-11 items-center gap-2 rounded-xl bg-flutter-navy px-6 text-sm font-bold text-white hover:bg-flutter-blue transition-all shadow-lg shadow-flutter-blue/20 hover:-translate-y-0.5"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
          Back to Home
        </Link>
        <Link
          href="/components"
          className="inline-flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 hover:border-slate-300 transition-all hover:-translate-y-0.5"
        >
          Browse Components
        </Link>
      </div>
    </div>
  );
}
