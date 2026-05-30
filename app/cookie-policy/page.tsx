import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cookie Policy | FlockUI",
  description: "Learn about the cookies used by FlockUI.",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white transition-colors duration-200">
      {/* Header */}
      <div className="border-b border-slate-100 bg-slate-50 py-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-flutter-blue mb-2">Legal</p>
          <h1 className="text-4xl font-extrabold text-slate-900 ">Cookie Policy</h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="prose prose-slate max-w-none">
          <p className="text-sm text-slate-500 font-medium">
            Last updated: 24 May 2026
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that websites store on your computer or mobile device when you visit them. They are widely used to make websites work properly, or to work more efficiently, and to provide information to the website owners.
          </p>
          <p>
            Think of a cookie like a small note that a website leaves in your browser so it can remember something about you the next time you visit.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">2. What Cookies We Use</h2>
          <p>
            FlockUI uses a minimal set of cookies. Here is a complete list:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 my-6">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50 ">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-slate-900 ">Cookie</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-900 ">Purpose</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-900 ">Duration</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-900 ">Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 ">
                <tr>
                  <td className="px-4 py-3 font-mono text-xs text-slate-700 ">_vercel_analytics_*</td>
                  <td className="px-4 py-3 text-slate-600 ">Used by Vercel Analytics to count unique visitors and track page views</td>
                  <td className="px-4 py-3 text-slate-600 ">Session / Persistent</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700 ">
                      Analytics
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-xs text-slate-700 ">flockui-theme</td>
                  <td className="px-4 py-3 text-slate-600 ">Stores your theme preference (light or dark mode) so it persists across visits</td>
                  <td className="px-4 py-3 text-slate-600 ">Persistent (localStorage)</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700 ">
                      Functional
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">3. What We Do NOT Use</h2>
          <p>We do <strong>not</strong> use cookies for:</p>
          <ul>
            <li>Advertising or targeted marketing</li>
            <li>Tracking you across different websites</li>
            <li>Profiling or building a profile of your behaviour</li>
            <li>Selling your data to third parties</li>
          </ul>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">4. Third-Party Cookies</h2>
          <p>
            The only third-party service that may set cookies on our website is <strong>Vercel Analytics</strong>. Vercel uses cookies to distinguish between unique visitors and to track page view counts. These cookies are:
          </p>
          <ul>
            <li>Anonymised — they cannot be used to identify you personally</li>
            <li>Limited to our domain only — they do not track you across other websites</li>
            <li>Used solely for aggregate analytics (e.g., "this page got 500 visits today")</li>
          </ul>
          <p>
            For more information, see <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-flutter-blue hover:underline">Vercel's Privacy Policy</a>.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">5. How to Control Cookies</h2>
          <p>
            You can control and manage cookies in several ways:
          </p>

          <h3 className="text-lg font-bold text-slate-900 mt-8 mb-3">5.1 Browser Settings</h3>
          <p>
            Most web browsers allow you to control cookies through their settings. You can:
          </p>
          <ul>
            <li>Block all cookies</li>
            <li>Accept cookies only from certain websites</li>
            <li>Delete cookies when you close your browser</li>
            <li>View and delete individual cookies</li>
          </ul>
          <p>
            Here are links to instructions for common browsers:
          </p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-flutter-blue hover:underline">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" className="text-flutter-blue hover:underline">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/en-in/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-flutter-blue hover:underline">Safari</a></li>
            <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-flutter-blue hover:underline">Microsoft Edge</a></li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900 mt-8 mb-3">5.2 Opt-Out of Analytics</h3>
          <p>
            If you do not want your visit data to be collected by Vercel Analytics, you can use browser extensions that block analytics scripts (such as uBlock Origin or Privacy Badger), or disable JavaScript in your browser settings.
          </p>
          <p>
            Please note that disabling cookies or analytics may affect your experience — for example, we won't be able to remember your theme preference.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">6. Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. We encourage you to review this page periodically.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">7. Contact Us</h2>
          <p>
            If you have any questions about our use of cookies, please:
          </p>
          <ul>
            <li>Open an issue on our <a href="https://github.com/Sonu-Hansda/flockui" target="_blank" rel="noopener noreferrer" className="text-flutter-blue hover:underline">GitHub repository</a></li>
            <li>Reach out to the project maintainer through GitHub</li>
          </ul>
          <p>
            You can also refer to our <a href="/privacy-policy" className="text-flutter-blue hover:underline">Privacy Policy</a> for more information about how we handle your data.
          </p>
        </div>
      </div>
    </div>
  );
}
