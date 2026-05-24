import { ExternalLink } from "lucide-react";
import DocsSidebar from "@/components/docs/DocsSidebar";
import ContributionSteps from "@/components/docs/ContributionSteps";
import ContributionPrereqs from "@/components/docs/ContributionPrereqs";
import ContributionGuide from "@/components/docs/ContributionGuide";
import ContributionRules from "@/components/docs/ContributionRules";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contributing | FlockUI",
  description: "Learn how to contribute Flutter components to FlockUI. Step-by-step guide for adding new widgets.",
};

export default function ContributionPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-200">
      <div className="border-b border-slate-100 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/50 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-flutter-blue dark:text-flutter-sky mb-2">
            Documentation
          </p>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">Contributing</h1>
          <p className="mt-2 text-base text-slate-500 dark:text-slate-400 max-w-xl">
            Learn how to contribute Flutter components to FlockUI. We welcome all contributions!
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 flex flex-col gap-10 md:flex-row">
        <DocsSidebar />

        <div className="flex-1 min-w-0 max-w-3xl space-y-10">
          {/* Welcome */}
          <section>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4">
              Welcome to FlockUI
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Thank you for considering contributing to FlockUI! We're building an open-source Flutter UI component library,
              and every contribution — whether it's a new component, a bug fix, or a documentation improvement — helps the
              community grow.
            </p>
          </section>

          <ContributionPrereqs />
          <ContributionSteps />

          {/* Project Structure */}
          <section>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Project Structure</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Understanding the directory layout will help you navigate the codebase:
            </p>
            <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-900 overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-700/50 px-4 py-2.5">
                <span className="text-xs font-mono text-slate-400">Directory Structure</span>
              </div>
              <pre className="overflow-x-auto px-5 py-4 text-sm leading-relaxed text-slate-200 font-mono">
                <code>{`flockui/
├── registry/              # 📦 Flutter component source files
│   ├── button/
│   │   └── default/
│   │       └── button_default.dart
│   └── toast/
│       └── default/
│           └── toast_default.dart
├── renderer/              # 🎨 Flutter web project for previews
│   └── lib/
│       ├── main.dart
│       └── component.dart   # (auto-generated)
├── lib/                   # 🧰 Website utilities
│   ├── component-meta.ts    # Component metadata registry
│   ├── get-component-code.ts
│   └── get-preview-url.ts
├── app/                   # 🌐 Next.js app router pages
├── components/            # 🧩 React components for the website
├── scripts/               # 🔧 Build & preview scripts
└── public/                # 📁 Static assets & built previews`}</code>
              </pre>
            </div>
          </section>

          <ContributionGuide />

          {/* Component Template */}
          <section>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Component Template</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Every component file should follow this structure with header comments:
            </p>
            <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-900 overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-700/50 px-4 py-2.5">
                <span className="text-xs font-mono text-slate-400">component_template.dart</span>
                <span className="text-xs text-slate-500">Dart</span>
              </div>
              <pre className="overflow-x-auto px-5 py-4 text-sm leading-relaxed text-slate-200 font-mono">
                <code>{`// FlockUI Component: Button (Default)
// Description: A versatile button widget with multiple variants...
// Category: Elements
// External Dependencies: none
// Author: Your Name (optional)

import 'package:flutter/material.dart';

class PreviewComponent extends StatefulWidget {
  const PreviewComponent({super.key});

  @override
  State<PreviewComponent> createState() => _PreviewComponentState();
}

class _PreviewComponentState extends State<PreviewComponent> {
  @override
  Widget build(BuildContext context) {
    // Your component widget tree goes here
    return ElevatedButton(
      onPressed: () {},
      child: const Text('Click Me'),
    );
  }
}`}</code>
              </pre>
            </div>
          </section>

          <ContributionRules />

          {/* Website Contribution */}
          <section>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Contributing to the Website</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              This guide focuses on contributing Flutter components. If you'd like to contribute to the Next.js website
              (docs, blog, design improvements), please reach out to me on{" "}
              <a
                href="https://linkedin.com/in/sonu-hansda"
                className="text-flutter-blue dark:text-flutter-sky hover:underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
              or email me at{" "}
              <a
                href="mailto:sonukumarhansda61@gmail.com"
                className="text-flutter-blue dark:text-flutter-sky hover:underline font-medium"
              >
                sonukumarhansda61@gmail.com
              </a>{" "}
              so we can discuss the best approach.
            </p>
          </section>

          {/* Need Help */}
          <section className="rounded-2xl border border-flutter-blue/20 dark:border-flutter-sky/20 bg-flutter-blue/5 dark:bg-flutter-sky/5 p-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Need Help?</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              If you have questions or run into issues,{" "}
              <a
                href="https://github.com/Sonu-Hansda/flockui/issues"
                className="text-flutter-blue dark:text-flutter-sky hover:underline font-medium inline-flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                open an issue on GitHub <ExternalLink className="h-3 w-3" />
              </a>{" "}
              or email{" "}
              <a
                href="mailto:sonukumarhansda61@gmail.com"
                className="text-flutter-blue dark:text-flutter-sky hover:underline font-medium"
              >
                sonukumarhansda61@gmail.com
              </a>
              . We're excited to see what you build! 🚀
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
