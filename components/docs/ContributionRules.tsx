import { Check } from "lucide-react";

const rules = [
  { label: "Class name must be PreviewComponent", desc: "Required by the renderer." },
  { label: "Use Material 3 widgets", desc: "Prefer FilledButton, Card, NavigationBar, etc." },
  { label: "Keep it self-contained", desc: "The entire component in a single .dart file." },
  { label: "Annotate external dependencies", desc: "List them in comments at the top of the file." },
];

const namingConventions = [
  ["Component directory", "kebab-case", "text-field, bottom-sheet"],
  ["Variant directory", "kebab-case", "default, outline, with-icon"],
  ["Dart file", "snake_case", "text_field_default.dart"],
  ["Dart class", "PascalCase", "PreviewComponent (always)"],
];

export default function ContributionRules() {
  return (
    <>
      <section>
        <h3 className="text-lg font-bold text-slate-900 mb-3">Code Rules</h3>
        <ul className="space-y-2">
          {rules.map((item) => (
            <li key={item.label} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-flutter-blue/10 text-flutter-blue ">
                <Check className="h-3 w-3" />
              </span>
              <span className="text-sm text-slate-700 ">
                <strong className="font-semibold text-slate-900 ">{item.label}:</strong> {item.desc}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-bold text-slate-900 mb-3">Naming Conventions</h3>
        <div className="overflow-hidden rounded-xl border border-slate-200 ">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 ">
                <th className="px-4 py-3 text-left font-semibold text-slate-700 ">Item</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700 ">Convention</th>
                <th className="px-4 py-3 text-left font-semibold text-slate-700 ">Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 ">
              {namingConventions.map(([item, convention, example]) => (
                <tr key={item} className="bg-white ">
                  <td className="px-4 py-3 font-medium text-slate-900 ">{item}</td>
                  <td className="px-4 py-3 text-slate-600 ">{convention}</td>
                  <td className="px-4 py-3 text-flutter-blue font-mono text-xs">{example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
