import { Check } from "lucide-react";
import DocsSidebar from "@/components/docs/DocsSidebar";

const codeSnippet = `// example_button.dart
import 'package:flutter/material.dart';

class FlockButton extends StatelessWidget {
  final String text;
  final VoidCallback onPressed;

  const FlockButton({
    super.key,
    required this.text,
    required this.onPressed,
  });

  @override
  Widget build(BuildContext context) {
    return FilledButton(
      onPressed: onPressed,
      child: Text(text),
    );
  }
}`;

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-200">
      <div className="border-b border-slate-100 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/50 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-flutter-blue dark:text-flutter-sky mb-2">Documentation</p>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">Getting Started</h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 flex flex-col gap-10 md:flex-row">
        <DocsSidebar />

        <div className="flex-1 min-w-0 max-w-3xl">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4">Introduction</h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            Welcome to FlockUI — the open-source Flutter UI component library. Our goal is simple: give developers pre-built, beautiful Flutter widgets they can copy directly into their codebase.
          </p>

          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Why copy-paste?</h3>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            Traditional UI libraries require you to install a package and live with its API forever. FlockUI gives you the source code — you own it, you customize it.
          </p>

          <ul className="space-y-2 mb-8">
            {[
              { label: "Zero Dependencies", desc: "Nothing to install or update." },
              { label: "Full Control", desc: "Modify any part of the widget to your needs." },
              { label: "Framework-native", desc: "Pure Flutter and Dart — no wrappers." },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-3 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-flutter-blue/10 dark:bg-flutter-sky/10 text-flutter-blue dark:text-flutter-sky">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-sm text-slate-700 dark:text-slate-300"><strong className="font-semibold text-slate-900 dark:text-white">{item.label}:</strong> {item.desc}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Quick Start</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">Find a component, copy the code, drop it into your project.</p>

          <div className="relative rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-900 overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-700/50 px-4 py-2.5">
              <span className="text-xs font-mono text-slate-400">example_button.dart</span>
              <span className="text-xs text-slate-500">Dart</span>
            </div>
            <pre className="overflow-x-auto px-5 py-4 text-sm leading-relaxed text-slate-200 font-mono">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
