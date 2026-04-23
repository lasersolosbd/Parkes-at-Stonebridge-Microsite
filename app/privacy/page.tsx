import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scale } from "lucide-react";

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });

  return (
    <main className="min-h-screen bg-slate-50 text-navy-900">
      <Navbar />
      
      <section className="pt-36 pb-24 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 border border-navy-100 rounded-sm shadow-xl">
          
          {/* Header */}
          <div className="mb-12 border-b border-navy-100 pb-6">
            <span className="inline-block font-mono text-[10px] tracking-[0.2em] uppercase text-gold-600 font-semibold mb-3">Compliance Portal</span>
            <h1 className="font-display text-4xl font-bold text-navy-950 mb-4">Privacy Policy</h1>
            <p className="text-navy-500 font-mono text-xs">Last Updated: {currentMonth}, {currentYear}</p>
          </div>

          {/* Policy content */}
          <div className="font-body text-navy-800 text-sm space-y-6 leading-relaxed">
            <p>At Solomon Home Services, we respect your privacy and are committed to protecting any personal information you share with us. This Privacy Policy outlines how we collect, use, and safeguard information.</p>
            
            <h2 className="font-display text-xl font-bold text-navy-950 pt-4 mb-2">Information We Collect</h2>
            <p>We may collect personal information such as your name, contact details (including phone number and email address), and unit address when you submit inquiries through our Valuation Portal or contact forms.</p>
            
            <h2 className="font-display text-xl font-bold text-navy-950 pt-4 mb-2">Use of Information</h2>
            <p>Information is collected for the purpose of providing real estate services, responding to inquiries, delivering property valuations, and occasional SMS/email updates regarding market activity in The Parkes at Stonebridge, Longmont, CO.</p>
            
            {/* Strict Non-sharing Clause */}
            <div className="bg-slate-50 border border-navy-100 p-6 rounded-sm shadow-inner text-navy-950 font-semibold italic text-base my-8">
              <Scale className="text-gold-500 mb-2" />
              "No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties."
            </div>

            <h2 className="font-display text-xl font-bold text-navy-950 pt-4 mb-2">Carrier Costs</h2>
            <p>As per strict requirements for text messaging communications, please note that message and data rates may apply. Program frequency varies. Reply STOP to opt-out.</p>
            
            <h2 className="font-display text-xl font-bold text-navy-950 pt-4 mb-2">Consent</h2>
            <p>By using our website and providing personal information, you consent to the terms of this Privacy Policy.</p>
            
            <h2 className="font-display text-xl font-bold text-navy-950 pt-4 mb-2">Contact Us</h2>
            <p>If you have any questions or require clarification regarding this Privacy Policy, please connect with Mark Solomon at mark@solomonhomeservices.com.</p>
          </div>

        </div>
      </section>
      
      <Footer />
    </main>
  );
}
