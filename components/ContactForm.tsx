import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact" className="bg-slate-100 py-24 px-6 lg:px-16 text-navy-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-navy-950 font-bold mb-4">
            Get Your Free Home Valuation
          </h2>
          <p className="text-navy-700 text-lg">
            Enter your info below. I will send you a detailed, data-driven assessment.
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 border border-navy-100 rounded shadow-xl">
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <input type="text" placeholder="First Name" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:border-gold-500 text-navy-900" required />
            </div>
            <div>
              <input type="text" placeholder="Last Name" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:border-gold-500 text-navy-900" required />
            </div>
            <div className="sm:col-span-2">
              <input type="tel" placeholder="Cell Number" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:border-gold-500 text-navy-900" required />
            </div>
            <div className="sm:col-span-2">
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:border-gold-500 text-navy-900" required />
            </div>
            <div className="sm:col-span-2">
              <input type="text" placeholder="Parkes Unit Address" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:border-gold-500 text-navy-900" required />
            </div>

            {/* Checkboxes */}
            <div className="sm:col-span-2 flex flex-col gap-4 mt-4">
              <label className="flex items-start gap-3 text-navy-600 text-xs leading-relaxed cursor-pointer">
                <input type="checkbox" className="mt-1" />
                <span>I agree to the Terms of Service and Privacy Policy. I consent to receive SMS communications regarding real estate services from Solomon Home Services. Message & data rates may apply. Reply STOP to opt-out.</span>
              </label>
              <label className="flex items-start gap-3 text-navy-600 text-xs leading-relaxed cursor-pointer">
                <input type="checkbox" className="mt-1" />
                <span>(Optional) I consent to receive additional property valuation updates and market reports via SMS.</span>
              </label>
            </div>

            <div className="sm:col-span-2 pt-4">
              <button type="submit" className="w-full py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold rounded transition-all flex items-center justify-center gap-2">
                Request Valuation <ArrowRight size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
