export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-200">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8">Terms of Service</h1>

        <div className="space-y-6 text-slate-600 dark:text-slate-400">
          <p className="font-medium">Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-10 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing and using FlockUI ("the Platform"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.</p>

          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-10 mb-4">2. Description of Service</h2>
          <p>FlockUI provides a collection of open-source Flutter UI components. Users are free to browse, preview, and copy the provided code into their own applications.</p>

          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-10 mb-4">3. License</h2>
          <p>All code provided on FlockUI is released under the MIT License unless otherwise specified. You are free to use, modify, and distribute the code in both open-source and commercial projects.</p>

          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-10 mb-4">4. User Content</h2>
          <p>We do not claim ownership over any application you build using our components. However, by contributing to our open-source repository, you agree to license your contributions under the same MIT license.</p>

          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-10 mb-4">5. Disclaimer of Warranties</h2>
          <p>The service is provided "as is" and "as available". We do not guarantee that the components will be error-free or function perfectly in all environments or on all devices.</p>
        </div>
      </div>
    </div>
  );
}
