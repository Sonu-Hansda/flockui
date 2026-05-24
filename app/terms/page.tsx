import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service | FlockUI",
  description: "Terms of Service for using FlockUI platform and components.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-200">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/50 py-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-flutter-blue dark:text-flutter-sky mb-2">Legal</p>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">Terms of Service</h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            Last updated: 24 May 2026
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-10 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using FlockUI ("the Platform"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use the Platform.
          </p>
          <p>
            By using the Platform, you confirm that you are at least 13 years of age (or the age of digital consent in your country).
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-10 mb-4">2. Description of Service</h2>
          <p>
            FlockUI is an open-source platform that provides a collection of Flutter UI components. Users can:
          </p>
          <ul>
            <li>Browse and preview components</li>
            <li>Copy component source code for use in their own projects</li>
            <li>Contribute new components or improvements via GitHub</li>
          </ul>
          <p>
            The Platform is provided free of charge. We reserve the right to modify, suspend, or discontinue any part of the service at any time without prior notice.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-10 mb-4">3. License</h2>
          <p>
            All code provided on FlockUI is released under the <strong>MIT License</strong> unless otherwise specified. This means:
          </p>
          <ul>
            <li><strong>You can</strong> use the code in personal, open-source, and commercial projects</li>
            <li><strong>You can</strong> modify the code to suit your needs</li>
            <li><strong>You can</strong> distribute the code (original or modified)</li>
            <li><strong>You must</strong> include the original copyright notice and license text in your project</li>
            <li><strong>You cannot</strong> hold the authors liable for any issues arising from the use of the code</li>
          </ul>
          <p>
            The full license text is available in the <a href="https://github.com/Sonu-Hansda/flockui/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="text-flutter-blue dark:text-flutter-sky hover:underline">LICENSE</a> file in our GitHub repository.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-10 mb-4">4. Contributions</h2>
          <p>
            We welcome contributions from the community! When you contribute to FlockUI (by submitting pull requests, code snippets, documentation, or any other content), you agree that:
          </p>
          <ul>
            <li>Your contributions are your original work and you have the right to submit them</li>
            <li>Your contributions will be licensed under the same MIT License as the rest of the project</li>
            <li>You grant the project maintainers the right to use, modify, and distribute your contributions</li>
            <li>You will not submit any code that contains malicious software, security vulnerabilities, or violates any law</li>
          </ul>

          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-10 mb-4">5. User Responsibilities</h2>
          <p>As a user of FlockUI, you agree that you will not:</p>
          <ul>
            <li>Use the Platform for any illegal purpose or in violation of any applicable laws</li>
            <li>Attempt to disrupt, damage, or gain unauthorised access to the Platform or its infrastructure</li>
            <li>Scrape, copy, or reproduce the Platform content in bulk for purposes other than personal use</li>
            <li>Misrepresent the origin of the code or claim it as your own without proper attribution</li>
            <li>Use the Platform to distribute malware or harmful code</li>
          </ul>

          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-10 mb-4">6. Intellectual Property</h2>
          <p>
            The FlockUI name, logo, and brand assets are the property of the project maintainer. You may not use these assets without prior permission.
          </p>
          <p>
            The component code itself is licensed under MIT (as stated in Section 3), but the overall compilation, design, and organisation of the Platform are protected by applicable copyright laws.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-10 mb-4">7. Disclaimer of Warranties</h2>
          <p>
            The Platform and all code provided are offered <strong>"as is"</strong> and <strong>"as available"</strong>, without any warranty of any kind, either express or implied.
          </p>
          <p>
            We do not guarantee that:
          </p>
          <ul>
            <li>The components will be error-free or function perfectly in all environments</li>
            <li>The Platform will be available at all times without interruption</li>
            <li>The code will meet your specific requirements or be compatible with your project</li>
          </ul>
          <p>
            You use the code at your own risk. It is your responsibility to test the components thoroughly before using them in production applications.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-10 mb-4">8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, the FlockUI project maintainers and contributors shall <strong>not</strong> be liable for any damages arising from your use of the Platform or the code provided, including but not limited to:
          </p>
          <ul>
            <li>Direct, indirect, incidental, or consequential damages</li>
            <li>Loss of data, profits, or business opportunities</li>
            <li>Security issues arising from the use of the code in your projects</li>
          </ul>

          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-10 mb-4">9. Termination</h2>
          <p>
            We reserve the right to restrict or terminate access to the Platform for any user who violates these terms, without prior notice or liability.
          </p>
          <p>
            Upon termination, your right to use the Platform will immediately cease. However, any code you have already copied and used in your projects will continue to be governed by the MIT License under which it was originally provided.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-10 mb-4">10. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of <strong>India</strong>. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in India.
          </p>
          <p>
            If you are accessing the Platform from outside India, you do so on your own initiative and are responsible for compliance with your local laws.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-10 mb-4">11. Changes to Terms</h2>
          <p>
            We may update these Terms of Service from time to time. When we do, we will update the "Last updated" date at the top of this page.
          </p>
          <p>
            Your continued use of the Platform after any changes constitutes your acceptance of the new terms. We encourage you to review this page periodically.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-10 mb-4">12. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please:
          </p>
          <ul>
            <li>Open an issue on our <a href="https://github.com/Sonu-Hansda/flockui" target="_blank" rel="noopener noreferrer" className="text-flutter-blue dark:text-flutter-sky hover:underline">GitHub repository</a></li>
            <li>Reach out to the project maintainer through GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
