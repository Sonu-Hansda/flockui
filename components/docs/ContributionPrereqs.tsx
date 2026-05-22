const tools = [
  ["Node.js", "v18+", "Running the Next.js website"],
  ["npm", "v9+", "Package management"],
  ["Flutter SDK", "v3.11+", "Building component previews"],
  ["Git", "Any", "Version control"],
];

export default function ContributionPrereqs() {
  return (
    <section>
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Prerequisites</h3>
      <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800">
              <th className="px-4 py-3 text-left font-semibold text-slate-700 dark:text-slate-300">Tool</th>
              <th className="px-4 py-3 text-left font-semibold text-slate-700 dark:text-slate-300">Version</th>
              <th className="px-4 py-3 text-left font-semibold text-slate-700 dark:text-slate-300">Purpose</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
            {tools.map(([tool, version, purpose]) => (
              <tr key={tool} className="bg-white dark:bg-slate-900">
                <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">{tool}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{version}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
