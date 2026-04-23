export default function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-white px-6">
      <div className="max-w-3xl mx-auto bg-slate-50 p-8 md:p-12 rounded-xl border border-gray-100 shadow-sm">
        <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Get Your Free Home Valuation</h2>
        <p className="text-slate-600 mb-8">Enter your Stonebridge address below. I will send you a detailed, confidential report.</p>
        
        <form className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="First Name" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gold-500" required />
            <input type="text" placeholder="Last Name" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gold-500" required />
          </div>
          <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gold-500" required />
          <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gold-500" required />
          <input type="text" placeholder="Townhouse Address (e.g., 770 Stonebridge Dr)" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gold-500" required />
          
          {/* 2026 GHL A2P Strict Compliance Checkboxes (OPTIONAL) */}
          <div className="flex flex-col gap-4 mt-2 bg-white p-4 border border-gray-200 rounded">
            <label className="flex items-start gap-3 text-xs text-slate-600 leading-tight cursor-pointer">
              <input type="checkbox" className="mt-0.5" />
              <span>I consent to receive marketing text messages, about special offers, discounts, and service updates, from Solomon Home Services at the phone number provided. Message frequency may vary. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out.</span>
            </label>
            <label className="flex items-start gap-3 text-xs text-slate-600 leading-tight cursor-pointer">
              <input type="checkbox" className="mt-0.5" />
              <span>I consent to receive non-marketing text messages from Solomon Home Services about property valuations and showing schedules. Message frequency may vary, message & data rates may apply. Text HELP for assistance, reply STOP to opt out.</span>
            </label>
          </div>

          <button type="submit" className="w-full py-4 bg-slate-900 hover:bg-gold-600 text-white font-bold rounded transition-colors text-lg mt-4">
            Request Valuation
          </button>
        </form>
      </div>
    </section>
  );
}
