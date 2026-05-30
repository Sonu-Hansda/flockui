import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | FlockUI",
  description: "Learn how FlockUI handles your data and privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white transition-colors duration-200">
      {/* Header */}
      <div className="border-b border-slate-100 bg-slate-50 py-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-flutter-blue mb-2">Legal</p>
          <h1 className="text-4xl font-extrabold text-slate-900 ">Privacy Policy</h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="prose prose-slate max-w-none">
          <p className="text-sm text-slate-500 font-medium">
            Last updated: 24 May 2026
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">1. What Information We Collect</h2>

          <h3 className="text-lg font-bold text-slate-900 mt-8 mb-3">1.1 Analytics Data (Automatic)</h3>
          <p>
            When you visit the FlockUI website, we use <strong>Vercel Analytics</strong> to collect basic, anonymised information such as:
          </p>
          <ul>
            <li>Which pages you visit (e.g., component pages, documentation)</li>
            <li>How long you stay on each page</li>
            <li>What browser and device you are using</li>
            <li>Your general location (country-level only — we never see your exact address)</li>
          </ul>
          <p>
            This data is <strong>anonymised</strong> — it cannot be used to identify you personally. We use it only to understand which parts of the platform are most useful and to improve the experience for everyone.
          </p>

          <h3 className="text-lg font-bold text-slate-900 mt-8 mb-3">1.2 Information You Voluntarily Provide</h3>
          <p>
            If you choose to contribute to FlockUI via GitHub (by opening issues, submitting pull requests, or commenting), your GitHub username and any information you include in those contributions will be visible publicly on GitHub. This is governed by GitHub's own privacy policy, not ours.
          </p>

          <h3 className="text-lg font-bold text-slate-900 mt-8 mb-3">1.3 What We Do NOT Collect</h3>
          <p>We do <strong>not</strong> collect:</p>
          <ul>
            <li>Your name, email address, or phone number (unless you voluntarily provide it on GitHub)</li>
            <li>Your IP address (Vercel Analytics anonymises it)</li>
            <li>Any personal information from your Flutter projects</li>
            <li>Payment or financial information</li>
          </ul>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">2. How We Use Your Information</h2>
          <p>We use the limited information we collect only for these purposes:</p>
          <ul>
            <li><strong>To improve the platform</strong> — understanding which components and documentation are most popular helps us focus our efforts</li>
            <li><strong>To fix issues</strong> — analytics help us detect errors or performance problems</li>
            <li><strong>To communicate with contributors</strong> — if you interact with us on GitHub, we may respond to your issues or pull requests</li>
          </ul>
          <p>We will <strong>never</strong> sell your personal data to anyone. Period.</p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">3. Cookies and Tracking</h2>
          <p>
            FlockUI uses minimal cookies. Vercel Analytics may set cookies to distinguish between unique visitors. These cookies do not track you across different websites.
          </p>
          <p>
            You can control cookies through your browser settings. If you disable cookies, the platform will still work normally — we just won't be able to count you as a unique visitor.
          </p>
          <p>
            For more details, please see our <a href="/cookie-policy" className="text-flutter-blue hover:underline">Cookie Policy</a>.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">4. Data Storage and Security</h2>
          <p>
            FlockUI is hosted on <strong>Vercel</strong>, a trusted cloud platform. Vercel implements industry-standard security measures to protect the data processed through their infrastructure.
          </p>
          <p>
            We do not operate our own databases or servers. The analytics data is stored and managed by Vercel in accordance with their security practices.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">5. Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <ul>
            <li><strong>Vercel</strong> — for hosting and analytics. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-flutter-blue hover:underline">View their privacy policy</a>.</li>
            <li><strong>GitHub</strong> — for source code hosting and issue tracking. <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer" className="text-flutter-blue hover:underline">View their privacy statement</a>.</li>
          </ul>
          <p>
            These services have their own privacy policies. We encourage you to review them. We are not responsible for how these third parties handle your data.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">6. Your Rights</h2>
          <p>Depending on where you live, you may have the following rights regarding your data:</p>
          <ul>
            <li><strong>Right to know</strong> — what data we collect (explained above)</li>
            <li><strong>Right to access</strong> — request a copy of any data we hold about you</li>
            <li><strong>Right to correction</strong> — ask us to fix any incorrect information</li>
            <li><strong>Right to deletion</strong> — ask us to delete any data we hold about you</li>
            <li><strong>Right to object</strong> — object to our use of your data for analytics</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us through our GitHub repository. Since we collect very little personal data, most of these requests will be straightforward to fulfil.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">7. Data Retention</h2>
          <p>
            Analytics data is retained by Vercel for a standard period (typically up to 38 months). After this period, the data is automatically deleted or anonymised further.
          </p>
          <p>
            We do not maintain our own databases, so there is no additional data retention on our part.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">8. Children's Privacy</h2>
          <p>
            FlockUI is not directed at children under the age of 13. We do not knowingly collect any information from children. If you believe a child has provided us with personal data, please contact us and we will delete it.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. We encourage you to review this page periodically.
          </p>
          <p>
            If we make significant changes, we will announce it on our GitHub repository.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">10. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy, please:
          </p>
          <ul>
            <li>Open an issue on our <a href="https://github.com/Sonu-Hansda/flockui" target="_blank" rel="noopener noreferrer" className="text-flutter-blue hover:underline">GitHub repository</a></li>
            <li>Reach out to the project maintainer directly through GitHub</li>
          </ul>
          <p>
            We will do our best to respond to your query within a reasonable time.
          </p>
        </div>
      </div>
    </div>
  );
}
