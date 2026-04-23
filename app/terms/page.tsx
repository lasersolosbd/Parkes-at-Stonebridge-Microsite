export default function TermsPage() {
  return (
    <main className="min-h-screen bg-cream px-6 py-24 max-w-3xl mx-auto">
      <h1 className="font-display text-4xl text-navy-900 mb-6">Terms of Service</h1>
      <p className="text-navy-700 leading-relaxed mb-4">
        By accessing or using this website, you agree to be bound by these Terms of Service.
        If you do not agree, please do not use this site.
      </p>
      <h2 className="font-display text-2xl text-navy-900 mt-8 mb-3">Use of Information</h2>
      <p className="text-navy-700 leading-relaxed mb-4">
        Information provided through this website will be used solely to respond to your inquiry
        and provide real estate services. We will not sell or share your personal information
        with third parties without your consent.
      </p>
      <h2 className="font-display text-2xl text-navy-900 mt-8 mb-3">Disclaimer</h2>
      <p className="text-navy-700 leading-relaxed mb-4">
        This website is provided for informational purposes only. All property information is
        subject to change. Market valuations are estimates and not guarantees of sale price.
      </p>
      <h2 className="font-display text-2xl text-navy-900 mt-8 mb-3">Contact</h2>
      <p className="text-navy-700 leading-relaxed">
        For questions regarding these terms, contact us at info@solomonhomeservices.com.
      </p>
      <a href="/" className="inline-block mt-10 text-gold-600 hover:text-gold-500 font-semibold tracking-wide text-sm">
        ← Back to Home
      </a>
    </main>
  );
}
