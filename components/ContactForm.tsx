"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from "lucide-react";

export default function ContactForm() {
  const [formType, setFormType] = useState('seller'); 
  
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", city: "", state: "", zip: "",
    timeframe: "", movingTo: "", workingWithAgent: "",
    rentOrOwn: "", buyTimeframe: "", firstTimeBuyer: "", lastBought: "",
    message: "", marketingConsent: false, updatesConsent: false,
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "Required.";
    if (!form.lastName.trim()) e.lastName = "Required.";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required.";
    if (!form.phone.trim()) e.phone = "Required.";

    if (formType === 'seller') {
      if (!form.address.trim()) e.address = "Required.";
      if (!form.city.trim()) e.city = "Required.";
      if (!form.state.trim()) e.state = "Required.";
      if (!form.zip.trim()) e.zip = "Required.";
      if (!form.timeframe.trim()) e.timeframe = "Required.";
      if (!form.movingTo.trim()) e.movingTo = "Required.";
      if (!form.workingWithAgent) e.workingWithAgent = "Required.";
    } else {
      if (!form.rentOrOwn) e.rentOrOwn = "Required.";
      if (!form.buyTimeframe.trim()) e.buyTimeframe = "Required.";
      if (!form.firstTimeBuyer) e.firstTimeBuyer = "Required.";
    }

    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  const inputClass = (field: string) =>
    `w-full bg-white border rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-stone-400 focus:outline-none focus:ring-2 transition-all duration-200 ${
      errors[field] ? "border-red-400 focus:ring-red-200" : "border-stone-200 focus:ring-gold-500/30 focus:border-gold-500"
    }`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-100">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="lg:pt-4">
            <span className="text-gold-600 text-xs font-semibold tracking-[0.3em] uppercase block mb-3">Let&apos;s Connect</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-950 leading-tight mb-5 font-display">
              Start The <span className="text-navy-700">Conversation.</span>
            </h2>
            <span className="block w-14 h-0.5 mb-7 bg-gradient-to-r from-gold-500 to-gold-300" />
            <p className="text-navy-700 text-base leading-relaxed mb-8">
              No pressure. Just an honest assessment of your home&apos;s value or your buying potential in The Parkes at Stonebridge — backed by 20+ years of experience and precise execution.
            </p>
            <div className="space-y-4">
              {[
                "Complimentary Comparative Market Analysis (CMA) for sellers", 
                "Strategic buyer education and clear path home", 
                "Custom selling or acquisition strategy for your timeline", 
                "Expert negotiation to protect your equity and investment"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-navy-900 shrink-0 mt-0.5" />
                  <span className="text-navy-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 bg-white border border-slate-200 rounded-xl space-y-3 shadow-sm">
              <p className="text-navy-950 font-semibold text-sm font-display">Prefer to reach out directly?</p>
              <a href="tel:+18168535467" className="flex items-center gap-3 text-navy-600 hover:text-gold-500 text-sm transition-colors"><Phone size={15} className="text-gold-500" />(816) 853-5467</a>
              <a href="mailto:mark@solomonhomeservices.com" className="flex items-center gap-3 text-navy-600 hover:text-gold-500 text-sm transition-colors"><Mail size={15} className="text-gold-500" />mark@solomonhomeservices.com</a>
              <div className="flex items-center gap-3 text-navy-500 text-sm"><MapPin size={15} className="text-gold-500" />Serving The Parkes at Stonebridge</div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="bg-white rounded-2xl p-12 text-center shadow-xl border border-slate-200 flex flex-col items-center justify-center min-h-[500px]">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-navy-900/10">
                  <CheckCircle size={32} className="text-navy-900" />
                </div>
                <h3 className="text-2xl font-bold text-navy-950 mb-3 font-display">Message Received.</h3>
                <p className="text-navy-600 text-sm leading-relaxed max-w-xs">Mark will be in touch shortly to discuss your real estate needs.</p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                <div className="flex border-b border-slate-200">
                  <button type="button" onClick={() => { setFormType('seller'); setErrors({}); }} className={`flex-1 py-4 text-sm font-semibold tracking-wider uppercase transition-colors ${formType === 'seller' ? 'bg-navy-900 text-white' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}>I&apos;m Selling</button>
                  <button type="button" onClick={() => { setFormType('buyer'); setErrors({}); }} className={`flex-1 py-4 text-sm font-semibold tracking-wider uppercase transition-colors ${formType === 'buyer' ? 'bg-navy-900 text-white' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}>I&apos;m Buying</button>
                </div>

                <form onSubmit={handleSubmit} noValidate className="p-8 md:p-10">
                  <h3 className="text-xl font-bold text-navy-950 mb-6 font-display">
                    {formType === 'seller' ? "Request a Free Home Valuation" : "Start Your Home Search"}
                  </h3>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">First Name <span className="text-red-500 ml-1">{errors.firstName || "*"}</span></label>
                      <input type="text" name="firstName" value={form.firstName} onChange={handleChange} className={inputClass("firstName")} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Last Name <span className="text-red-500 ml-1">{errors.lastName || "*"}</span></label>
                      <input type="text" name="lastName" value={form.lastName} onChange={handleChange} className={inputClass("lastName")} />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Email Address <span className="text-red-500 ml-1">{errors.email || "*"}</span></label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} className={inputClass("email")} />
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Phone Number <span className="text-red-500 ml-1">{errors.phone || "*"}</span></label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} className={inputClass("phone")} />
                  </div>

                  {formType === 'seller' && (
                    <>
                      <div className="mb-4">
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Parkes Address <span className="text-red-500 ml-1">{errors.address || "*"}</span></label>
                        <input type="text" name="address" value={form.address} onChange={handleChange} className={inputClass("address")} />
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="col-span-1">
                          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">City <span className="text-red-500 ml-1">{errors.city || "*"}</span></label>
                          <input type="text" name="city" value={form.city} onChange={handleChange} className={inputClass("city")} />
                        </div>
                        <div className="col-span-1">
                          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">State <span className="text-red-500 ml-1">{errors.state || "*"}</span></label>
                          <input type="text" name="state" value={form.state} onChange={handleChange} className={inputClass("state")} />
                        </div>
                        <div className="col-span-1">
                          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Zip <span className="text-red-500 ml-1">{errors.zip || "*"}</span></label>
                          <input type="text" name="zip" value={form.zip} onChange={handleChange} className={inputClass("zip")} />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                           <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Timeframe <span className="text-red-500 ml-1">{errors.timeframe || "*"}</span></label>
                           <input type="text" name="timeframe" value={form.timeframe} onChange={handleChange} placeholder="e.g. ASAP, 3 months" className={inputClass("timeframe")} />
                        </div>
                        <div>
                           <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Moving To <span className="text-red-500 ml-1">{errors.movingTo || "*"}</span></label>
                           <input type="text" name="movingTo" value={form.movingTo} onChange={handleChange} placeholder="City, State" className={inputClass("movingTo")} />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Working with an Agent? <span className="text-red-500 ml-1">{errors.workingWithAgent || "*"}</span></label>
                        <div className="flex gap-4 mt-2">
                          <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer"><input type="radio" name="workingWithAgent" value="yes" checked={form.workingWithAgent === "yes"} onChange={handleChange} className="w-4 h-4 text-navy-900 focus:ring-gold-500" /> Yes</label>
                          <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer"><input type="radio" name="workingWithAgent" value="no" checked={form.workingWithAgent === "no"} onChange={handleChange} className="w-4 h-4 text-navy-900 focus:ring-gold-500" /> No</label>
                        </div>
                      </div>
                    </>
                  )}

                  {formType === 'buyer' && (
                    <>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                           <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Current Residence <span className="text-red-500 ml-1">{errors.rentOrOwn || "*"}</span></label>
                           <select name="rentOrOwn" value={form.rentOrOwn} onChange={handleChange} className={inputClass("rentOrOwn")}>
                             <option value="">Select...</option><option value="rent">Rent</option><option value="own">Own</option>
                           </select>
                        </div>
                        <div>
                           <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Move Timeframe <span className="text-red-500 ml-1">{errors.buyTimeframe || "*"}</span></label>
                           <input type="text" name="buyTimeframe" value={form.buyTimeframe} onChange={handleChange} placeholder="e.g. ASAP, 6 months" className={inputClass("buyTimeframe")} />
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">First time home buyer? <span className="text-red-500 ml-1">{errors.firstTimeBuyer || "*"}</span></label>
                        <div className="flex gap-4 mt-2">
                          <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer"><input type="radio" name="firstTimeBuyer" value="yes" checked={form.firstTimeBuyer === "yes"} onChange={handleChange} className="w-4 h-4 text-navy-900 focus:ring-gold-500" /> Yes</label>
                          <label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer"><input type="radio" name="firstTimeBuyer" value="no" checked={form.firstTimeBuyer === "no"} onChange={handleChange} className="w-4 h-4 text-navy-900 focus:ring-gold-500" /> No</label>
                        </div>
                      </div>

                      {form.firstTimeBuyer === "no" && (
                        <div className="mb-4">
                          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Last time you bought/sold? <span className="text-red-500 ml-1">{errors.lastBought || "*"}</span></label>
                          <select name="lastBought" value={form.lastBought} onChange={handleChange} className={inputClass("lastBought")}>
                             <option value="">Select...</option>
                             <option value="0-3">0-3 years ago</option>
                             <option value="4-6">4-6 years ago</option>
                             <option value="7+">7+ years ago</option>
                          </select>
                        </div>
                      )}
                    </>
                  )}

                  <div className="mb-6 mt-4">
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                      Message <span className="text-slate-400 font-normal normal-case">(optional)</span>
                    </label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Please tell me the best way I can be of assistance." className={`${inputClass("message")} resize-none`} />
                  </div>

                  <div className="flex flex-col gap-4 mt-2 mb-6 bg-slate-50 p-4 border border-slate-200 rounded-lg">
                    <label className="flex items-start gap-3 text-xs text-slate-600 leading-tight cursor-pointer">
                      <input type="checkbox" name="marketingConsent" checked={form.marketingConsent} onChange={handleChange} className="mt-0.5" />
                      <span>(Optional) I consent to receive marketing text messages, about special offers, discounts, and service updates, from Solomon Home Services at the phone number provided. Message frequency may vary. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out.</span>
                    </label>
                    <label className="flex items-start gap-3 text-xs text-slate-600 leading-tight cursor-pointer">
                      <input type="checkbox" name="updatesConsent" checked={form.updatesConsent} onChange={handleChange} className="mt-0.5" />
                      <span>(Optional) I consent to receive non-marketing text messages from Solomon Home Services about property valuations and showing schedules. Message frequency may vary, message & data rates may apply. Text HELP for assistance, reply STOP to opt out.</span>
                    </label>
                  </div>

                  <button type="submit" disabled={loading} className="w-full py-4 rounded-lg font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2 bg-gold-500 text-navy-950 hover:bg-gold-400 transition-colors duration-300 disabled:opacity-60 shadow-md">
                    {loading ? "Sending..." : (formType === 'seller' ? "Get My Free Valuation" : "Let&apos;s Get Started")}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
