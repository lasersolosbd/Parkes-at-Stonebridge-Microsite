"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Home } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  bedrooms: string;
  message: string;
  termsConsent: boolean;
  smsConsent: boolean;
}

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  bedrooms: "",
  message: "",
  termsConsent: false,
  smsConsent: false,
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "A valid email is required.";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!form.address.trim()) newErrors.address = "Property address is required.";
    if (!form.termsConsent) newErrors.termsConsent = "You must agree to continue.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? target.checked : value,
    }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setFormState("submitting");

    // Simulate API call — replace with your GHL webhook or CRM endpoint
    await new Promise((r) => setTimeout(r, 1800));
    setFormState("success");
  };

  if (formState === "success") {
    return (
      <section id="contact" className="bg-navy-950 py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle size={52} className="text-gold-400 mx-auto mb-6" />
          <h3 className="font-display text-3xl text-white font-bold mb-3">
            Request Received!
          </h3>
          <p className="text-white/60 leading-relaxed mb-8">
            Thanks, {form.firstName}. I'll review your property details and reach
            out within 24 hours with your personalized home valuation.
            {form.smsConsent && " I'll also send you a text to confirm."}
          </p>
          <button
            onClick={() => { setForm(initialForm); setFormState("idle"); }}
            className="btn-outline"
          >
            Submit Another Request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-navy-950 py-24 px-6 relative overflow-hidden">
      {/* Subtle bg pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #c9973a 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* Left: Intro panel */}
        <div className="pt-2">
          <span className="section-label">Free Home Valuation</span>
          <h2 className="font-display text-4xl md:text-5xl text-white font-bold leading-tight mb-5">
            What's Your
            <span className="block text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #e8c05a, #c9973a)" }}
            >
              Townhome Worth?
            </span>
          </h2>
          <div className="gold-rule w-16 mb-6" />
          <p className="text-white/55 leading-relaxed mb-8">
            As your neighbor, I can give you a hyper-local valuation based on
            real-time Parkes comps — not just zip code averages. Fill out the
            form and I'll personally prepare your custom report.
          </p>

          {/* Value props */}
          <ul className="space-y-4">
            {[
              "Comparable sales from within The Parkes, not just Longmont",
              "HOA-adjusted pricing strategy unique to our community",
              "No obligation. No pushy follow-up. Veteran's promise.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-sm bg-gold-500/20 border border-gold-500/40 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="#c9973a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 p-5 border border-gold-500/20 rounded-sm bg-white/3">
            <div className="flex items-center gap-3 mb-2">
              <Home size={18} className="text-gold-400" />
              <span className="text-gold-400 text-xs font-mono tracking-widest uppercase">Your Local Expert</span>
            </div>
            <p className="text-white font-display text-xl font-semibold">Mark Solomon</p>
            <p className="text-white/50 text-xs mt-1">
              Solomon Home Services · Parkes Resident · Navy Veteran
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-white/5 border border-white/10 rounded-sm p-8 backdrop-blur-sm">
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Name row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-white/50 tracking-widest uppercase mb-1.5">
                  First Name <span className="text-gold-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="Mark"
                  className="form-input"
                />
                {errors.firstName && (
                  <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label className="block text-xs font-mono text-white/50 tracking-widest uppercase mb-1.5">
                  Last Name <span className="text-gold-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Solomon"
                  className="form-input"
                />
                {errors.lastName && (
                  <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-mono text-white/50 tracking-widest uppercase mb-1.5">
                Email Address <span className="text-gold-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="form-input"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-mono text-white/50 tracking-widest uppercase mb-1.5">
                Phone Number <span className="text-gold-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="(970) 555-0000"
                className="form-input"
              />
              {errors.phone && (
                <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Property address */}
            <div>
              <label className="block text-xs font-mono text-white/50 tracking-widest uppercase mb-1.5">
                Property Address <span className="text-gold-500">*</span>
              </label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="2800 Stonebridge Dr, Unit #, Longmont, CO"
                className="form-input"
              />
              {errors.address && (
                <p className="text-red-400 text-xs mt-1">{errors.address}</p>
              )}
            </div>

            {/* Bedrooms */}
            <div>
              <label className="block text-xs font-mono text-white/50 tracking-widest uppercase mb-1.5">
                Bedrooms
              </label>
              <select
                name="bedrooms"
                value={form.bedrooms}
                onChange={handleChange}
                className="form-input"
              >
                <option value="">Select…</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4 Bedrooms</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-mono text-white/50 tracking-widest uppercase mb-1.5">
                Additional Notes
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                placeholder="Recent upgrades, timeline, questions…"
                className="form-input resize-none"
              />
            </div>

            {/* ── A2P Compliance Checkboxes ── */}
            <div className="border-t border-white/10 pt-5 space-y-4">
              {/* Checkbox 1 — Required: Terms & Privacy */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="termsConsent"
                  checked={form.termsConsent}
                  onChange={handleChange}
                  className="mt-0.5 w-4 h-4 flex-shrink-0 accent-gold-500 cursor-pointer"
                  required
                />
                <span className="text-xs text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                  <span className="text-gold-500 font-semibold">*</span> I agree to the{" "}
                  <a
                    href="/terms"
                    className="text-gold-400 hover:text-gold-300 underline underline-offset-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy"
                    className="text-gold-400 hover:text-gold-300 underline underline-offset-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
              {errors.termsConsent && (
                <p className="text-red-400 text-xs -mt-2 ml-7">
                  {errors.termsConsent}
                </p>
              )}

              {/* Checkbox 2 — Optional: SMS Consent (A2P 10DLC) */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="smsConsent"
                  checked={form.smsConsent}
                  onChange={handleChange}
                  className="mt-0.5 w-4 h-4 flex-shrink-0 accent-gold-500 cursor-pointer"
                />
                <span className="text-xs text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                  I consent to receive SMS text messages from{" "}
                  <strong className="text-white/75">Solomon Home Services</strong> for
                  communication. Msg &amp; data rates may apply. Reply{" "}
                  <strong className="text-white/75">STOP</strong> to opt-out.{" "}
                  <span className="text-white/35">(Optional)</span>
                </span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={formState === "submitting"}
              className="btn-gold w-full justify-center text-sm mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {formState === "submitting" ? (
                <>
                  <span className="w-4 h-4 border-2 border-navy-900/40 border-t-navy-900 rounded-full animate-spin" />
                  Submitting…
                </>
              ) : (
                <>
                  Request My Free Valuation
                  <Send size={15} />
                </>
              )}
            </button>

            {formState === "error" && (
              <div className="flex items-center gap-2 text-red-400 text-xs">
                <AlertCircle size={14} />
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
