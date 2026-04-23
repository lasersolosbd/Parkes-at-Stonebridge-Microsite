import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Scale } from "lucide-react";

export default function TermsOfService() {
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <main className="min-h-screen bg-slate-50 text-navy-900">
      <Navbar />
      
      <section className="pt-36 pb-24 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 border border-navy-100 rounded-sm shadow-xl">
          
          {/* Header */}
          <div className="mb-12 border-b border-navy-100 pb-6">
            <span className="inline-block font-mono text-[10px] tracking-[0.2em] uppercase text-gold-600 font-semibold mb-3">Compliance Portal</span>
            <h1 className="font-display text-4xl font-bold text-navy-950 mb-4">Terms of Service</h1>
            <p className="text-navy-500 font-mono text-xs">Last Updated: {currentDate}</p>
          </div>

          {/* TOS content */}
          <div className="font-body text-navy-800 text-sm space-y-6 leading-relaxed">
            <p>By accessing the Solomon Home Services microsite, you agree to comply with and be bound by the following terms and conditions.</p>
            
            <h2 className="font-display text-xl font-bold text-navy-950 pt-4 mb-2">Brokerage Firm Disclosure</h2>
            <p>Solomon Home Services operates under the registered brokerage firm: Real. Firm contact info: (720) 807-2980 or (855) 450-0442.</p>
            
            <h2 className="font-display text-xl font-bold text-navy-950 pt-4 mb-2">SMS Program Terms</h2>
            <p>Our SMS program may deliver valuation updates, market reports, and communication regarding real estate services in The Parkes at Stonebridge, Longmont, CO. Msg frequency varies. Msg & data rates may apply. Carriers are not liable for delayed or undelivered messages.</p>
            
            <div className="bg-slate-50 border border-navy-100 p-6 rounded-sm shadow-inner text-navy-950 font-semibold my-8">
              <Scale className="text-gold-500 mb-2" />
              SMS Program Name: Solomon Home Services Alerts | Registered firm name Real
            </div>

            <h2 className="font-display text-xl font-bold text-navy-950 pt-4 mb-2">Unsubscribe / STOP</h2>
            <p>Users may unsubscribe from SMS communications at any time. Text STOP to cease all text messaging communications from Solomon Home Services.</p>
            
            <h2 className="font-display text-xl font-bold text-navy-950 pt-4 mb-2">Limitations of Service</h2>
            <p>Solomon Home Services serves as a local real estate information portal. Valuation estimates are based on available data and are not a substitute for a formal real estate appraisal. All transactions are subject to real estate regulations in Longmont, Colorado.</p>
            
            <h2 className="font-display text-xl font-bold text-navy-950 pt-4 mb-2">Governing Law</h2>
            <p>These Terms are governed by the laws of the State of Colorado.</p>
            
            <h2 className="font-display text-xl font-bold text-navy-950 pt-4 mb-2">Privacy Policy</h2>
            <p>Your use of our website constitutes acceptance of our <Link href="/privacy" className="text-gold-600 hover:underline">Privacy Policy</Link>.</p>
          </div>

        </div>
      </section>
      
      <Footer />
    </main>
  );
}
