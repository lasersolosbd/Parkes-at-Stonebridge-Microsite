export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-cream px-6 py-24 max-w-3xl mx-auto">
      <h1 className="font-display text-4xl text-navy-900 mb-6">Privacy Policy</h1>
      <p className="text-navy-700 leading-relaxed mb-4">
        Solomon Home Services ("we," "our," or "us") is committed to protecting your privacy.
        This Privacy Policy explains how we collect, use, disclose, and safeguard your information
        when you visit our website or contact us.
      </p>
      <h2 className="font-display text-2xl text-navy-900 mt-8 mb-3">Information We Collect</h2>
      <p className="text-navy-700 leading-relaxed mb-4">
        We may collect personal information such as your name, email address, phone number, and
        property address when you submit a contact form or request a home valuation.
      </p>
      <h2 className="font-display text-2xl text-navy-900 mt-8 mb-3">SMS Communications</h2>
      <p className="text-navy-700 leading-relaxed mb-4">
        If you opt in to SMS communications, we may send you text messages related to your inquiry.
        Message and data rates may apply. You may opt out at any time by replying STOP to any
        message you receive from us.
      </p>
      <h2 className="font-display text-2xl text-navy-900 mt-8 mb-3">Contact</h2>
      <p className="text-navy-700 leading-relaxed">
        For questions regarding this policy, contact us at info@solomonhomeservices.com.
      </p>
      <a href="/" className="inline-block mt-10 text-gold-600 hover:text-gold-500 font-semibold tracking-wide text-sm">
        ← Back to Home
      </a>
    </main>
  );
}
