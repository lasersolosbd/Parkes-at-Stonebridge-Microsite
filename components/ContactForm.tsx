import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  return (
    <section id="contact" className="bg-slate-50 py-24 px-6 lg:px-16 border-t border-navy-100 text-navy-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
            
            {/* Form Info */}
            <div className="col-span-1 md:col-span-5">
              <span className="inline-block font-mono text-[10px] tracking-[0.2em] uppercase text-gold-600 font-semibold mb-3">Stonebridge Portal</span>
              <h2 className="font-display text-4xl md:text-5xl text-navy-950 font-bold leading-tight mb-5">
                Neighborhood Equity Portal
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p className="text-navy-700 text-base leading-relaxed max-w-sm mb-6">
                Connect with Mark – Parkes resident and local expert. Receive a confidential, data-driven assessment or inquire about MLS alerts.
              </p>
               <div className="inline-flex items-center gap-3 border border-navy-100 bg-white p-3 rounded-sm shadow-inner">
                 <span className="font-display text-base font-semibold text-navy-950">Mark Solomon</span>
                 <span className="text-gold-500">|</span>
                 <span className="text-navy-600 text-sm">Dedicated Resident Since 2019</span>
               </div>
            </div>

            {/* Form */}
            <div className="col-span-1 md:col-span-7 bg-white p-8 border border-navy-100 rounded-sm shadow-xl">
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <input type="text" placeholder="First Name" className="compliance-input" required />
                </div>
                <div>
                    <input type="text" placeholder="Last Name" className="compliance-input" required />
                </div>
                <div className="sm:col-span-2">
                    <input type="tel" placeholder="Cell Number (SMS Updates)" className="compliance-input" required />
                </div>
                <div className="sm:col-span-2">
                    <input type="email" placeholder="Email Address" className="compliance-input" required />
                </div>
                <div className="sm:col-span-2">
                    <input type="text" placeholder="Parkes Unit Address" className="compliance-input" required />
                </div>
                <div className="sm:col-span-2">
                    <textarea placeholder="Your inquiry (Optional)" rows={3} className="compliance-input"></textarea>
                </div>

                {/* Strict Two-Checkbox Form compliance */}
                <div className="sm:col-span-2 flex flex-col gap-4 mt-2">
                    <label className="flex items-start gap-3.5 text-navy-600 text-[10px] font-mono leading-relaxed cursor-pointer group">
                        <input type="checkbox" className="mt-1 flex-shrink-0" /> {/* Optional per SOP req */}
                        <span>
                            I agree to the Terms of Service and Privacy Policy. I consent to receive SMS communications regarding real estate services from Solomon Home Services. Message & data rates may apply. Reply STOP to opt-out.
                        </span>
                    </label>
                    <label className="flex items-start gap-3.5 text-navy-600 text-[10px] font-mono leading-relaxed cursor-pointer group pt-1">
                        <input type="checkbox" className="mt-1 flex-shrink-0" /> {/* Optional per SOP req */}
                        <span>
                            (Optional) I consent to receive additional property valuation updates, local market reports, and occasional community news via SMS from Solomon Home Services.
                        </span>
                    </label>
                </div>

                <div className="sm:col-span-2 pt-4">
                  <button type="submit" className="btn-gold w-full flex items-center justify-center gap-3">
                    Connect with your Neighbor, Mark Solomon
                    <ArrowRight size={18} />
                  </button>
                </div>
              </form>
            </div>

        </div>
      </div>
    </section>
  );
}
