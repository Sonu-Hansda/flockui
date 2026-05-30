const tools = [
  ["Node.js", "v18+", "Running the Next.js website"],
  ["npm", "v9+", "Package management"],
  ["Flutter SDK", "v3.11+", "Building component previews"],
  ["Git", "Any", "Version control"],
];

export default function ContributionPrereqs() {
  return (
    <section>
      <h3 className="text-lg font-bold text-slate-900 mb-3">Prerequisites</h3>
      <div className="overflow-hidden rounded-xl border border-slate-200 ">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 ">
              <th className="px-4 py-3 text-left font-semibold text-slate-700 ">Tool</th>
              <th className="px-4 py-3 text-left font-semibold text-slate-700 ">Version</th>
              <th className="px-4 py-3 text-left font-semibold text-slate-700 ">Purpose</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 ">
            {tools.map(([tool, version, purpose]) => (
              <tr key={tool} className="bg-white ">
                <td className="px-4 py-3 font-medium text-slate-900 ">{tool}</td>
                <td className="px-4 py-3 text-slate-600 ">{version}</td>
                <td className="px-4 py-3 text-slate-600 ">{purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
