export default function ContributionGuide() {
  return (
    <section>
      <h3 className="text-lg font-bold text-slate-900 mb-3">Adding a New Component</h3>
      <div className="space-y-4">
        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900 mb-2">1. Create the directory</p>
          <code className="block bg-white border border-slate-200 px-3 py-2 rounded-lg text-sm text-flutter-blue font-mono">
            mkdir -p registry/card/default
          </code>
        </div>

        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900 mb-2">2. Create the Dart file</p>
          <p className="text-xs text-slate-500 mb-2">
            Create <code className="text-flutter-blue font-mono">registry/card/default/card_default.dart</code> with a <code className="text-flutter-blue font-mono">PreviewComponent</code> class.
          </p>
        </div>

        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900 mb-2">3. Register metadata</p>
          <p className="text-xs text-slate-500 mb-2">
            Add an entry in <code className="text-flutter-blue font-mono">lib/component-meta.ts</code>:
          </p>
          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
            <pre className="overflow-x-auto px-4 py-3 text-sm leading-relaxed text-slate-200 font-mono bg-slate-900">
              <code>{`card: {
  name: "Cards",
  tag: "Layout",
  color: "bg-flutter-purple/10 text-flutter-purple border-flutter-purple/20",
  description: "A flexible container for grouping related content and actions.",
},`}</code>
            </pre>
          </div>
        </div>

        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900 mb-2">4. Build the preview</p>
          <code className="block bg-white border border-slate-200 px-3 py-2 rounded-lg text-sm text-flutter-blue font-mono">
            npm run render -- -Component card -Variant default
          </code>
        </div>

        <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900 mb-2">5. Verify</p>
          <p className="text-xs text-slate-500 ">
            Start <code className="text-flutter-blue font-mono">npm run dev</code> and visit <code className="text-flutter-blue font-mono">/components/card</code> to see your component.
          </p>
        </div>
      </div>
    </section>
  );
}
