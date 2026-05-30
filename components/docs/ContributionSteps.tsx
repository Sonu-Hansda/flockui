import { Code, FileCode, FolderGit2, GitFork, Package, Terminal } from "lucide-react";

const steps = [
  {
    icon: GitFork,
    title: "Fork the Repository",
    desc: "Click the Fork button on the FlockUI GitHub page to create a copy under your account.",
  },
  {
    icon: Terminal,
    title: "Clone & Install",
    desc: "Clone your fork, add the upstream remote, and run npm install to set up dependencies.",
  },
  {
    icon: FolderGit2,
    title: "Create Component Directory",
    desc: "Create registry/<component>/<variant>/ and add your Dart component file.",
  },
  {
    icon: FileCode,
    title: "Register Metadata",
    desc: "Add your component's name, tag, color, and description in lib/component-meta.ts.",
  },
  {
    icon: Package,
    title: "Build Preview",
    desc: "Run npm run render -- -Component <name> -Variant <variant> to generate a live preview.",
  },
  {
    icon: Code,
    title: "Submit a Pull Request",
    desc: "Push your changes and open a PR. I'll review it and merge it once everything looks good.",
  },
];

export default function ContributionSteps() {
  return (
    <section>
      <h3 className="text-lg font-bold text-slate-900 mb-4">Contribution Overview</h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-flutter-blue/10 text-flutter-blue ">
                <Icon className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900 ">{step.title}</p>
                <p className="text-xs text-slate-500 mt-0.5">{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
