import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-display font-bold text-slate-900 mb-8">Terms of Service</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-700">
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
          <p>
            Welcome to Solomon Home Services. By accessing our website and utilizing our services, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">SMS Terms of Service</h2>
          <ul className="list-disc pl-6 space-y-4 bg-white p-6 border border-gray-200 rounded">
            <li><strong>Program Name:</strong> Solomon Home Services Property Alerts</li>
            <li>Users can expect to receive real estate market updates, property valuations, appointment reminders, and occasional promotional offers regarding real estate services in the Longmont area upon opting in.</li>
            <li>You can cancel the SMS service at any time. Simply text "STOP" to the shortcode. Upon sending "STOP," we will confirm your unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as you did initially, and we will resume sending SMS messages to you.</li>
            <li>Carriers are not liable for delayed or undelivered messages.</li>
            <li>As always, message and data rates may apply for messages sent to you from us and to us from you. Message frequency varies. For questions about your text plan or data plan, contact your wireless provider.</li>
            <li>For privacy-related inquiries, please refer to our privacy policy: <Link href="/privacy" className="text-gold-600 hover:underline">Privacy Policy</Link>.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Service Limitations</h2>
          <p>
            Property valuations and market data provided on this site are estimates based on available data and do not constitute a formal appraisal. Real estate markets are subject to change, and we do not guarantee the accuracy or timeliness of the information provided.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Governing Law</h2>
            <p>
            These terms and conditions are governed by and construed in accordance with the laws of the State of Colorado.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
