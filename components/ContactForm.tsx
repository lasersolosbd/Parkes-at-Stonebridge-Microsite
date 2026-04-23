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
    // Handle specific checkbox typing for React
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
    // Simulate network request for mockup/Vercel deployment
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
          
          {/* Left Column: Copy */}
          <div className="lg:pt-4">
            <span className="text-gold-600 text-xs font-semibold tracking-[0.3em] uppercase block mb-3">Let's Connect</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-950 leading-tight mb-5 font-display">
              Start The <span className="text-navy-700">Conversation.</span>
            </h2>
            <span className="block w-14 h-0.5 mb-7 bg-gradient-to-r from-gold-500 to-gold-300" />
            <p className="text-navy-700 text-base leading-relaxed mb-8">
              No pressure. Just an honest assessment of your home's value or your buying potential in The Parkes at Stonebridge — backed by 20+ years of experience and precise execution.
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
              <a href="mailto:mark@solomonhomeservices.com" className="flex items-center gap-3 text-navy-600 hover:text-gold-500 text-sm transition-colors"><Mail size={15} className="text
