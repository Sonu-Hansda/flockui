export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-200">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8">Privacy Policy</h1>

        <div className="space-y-6 text-slate-600 dark:text-slate-400">
          <p className="font-medium">Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-10 mb-4">1. Information We Collect</h2>
          <p>FlockUI is an open-source platform. We believe in minimizing data collection. When you browse the platform, we may collect basic analytics data (such as page views and component interactions) to help us improve the service.</p>

          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-10 mb-4">2. Use of Information</h2>
          <p>Any information collected is used solely for the purpose of improving the FlockUI platform, understanding which components are most popular, and identifying areas where our documentation can be improved.</p>

          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-10 mb-4">3. Third-Party Services</h2>
          <p>We may use third-party analytics tools (like Google Analytics or Vercel Analytics) which may set cookies on your browser. We do not sell your personal data to any third-party advertising networks.</p>

          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-10 mb-4">4. Code Usage</h2>
          <p>When you copy code from FlockUI into your own projects, we do not track where or how the code is used. Your local development environment remains entirely private.</p>

          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-10 mb-4">5. Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy, please feel free to open an issue on our GitHub repository.</p>
        </div>
      </div>
    </div>
  );
}
