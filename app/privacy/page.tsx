import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-700">
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
          <p>
            At Solomon Home Services, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information when you use our website or services.
          </p>
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Information Collection and Use</h2>
          <p>
            We collect information you provide directly to us, such as your name, email address, phone number, and property details, when you request a home valuation or contact us. This information is used solely to provide real estate services, communicate with you, and deliver the specific information you requested.
          </p>
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Data Sharing and SMS Compliance</h2>
          <p className="font-bold border-l-4 border-gold-500 pl-4 py-2 bg-white text-slate-900">
            No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
          </p>
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Security</h2>
          <p>
            We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
          </p>
          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at mark@solomonhomeservices.com or (970) 555-0000.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
