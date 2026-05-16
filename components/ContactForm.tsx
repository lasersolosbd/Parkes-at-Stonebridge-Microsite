"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react";

// Dynamically import the SDK only on the client side to bypass server compilation errors
let retellWebClient: any = null;
if (typeof window !== "undefined") {
  const { RetellWebClient } = require("retell-client-js-sdk");
  retellWebClient = new RetellWebClient();
}

export default function ContactForm() {
  const [mode, setMode] = useState<string>("voice");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isCalling, setIsCalling] = useState<boolean>(false);
  const [textSubmitted, setTextSubmitted] = useState<boolean>(false);
  const [statusText, setStatusText] = useState<string>("Online");
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (!retellWebClient) return;

    const handleCallStarted = () => {
      setIsCalling(true);
      setStatusText("Call Connected");
      setIsError(false);
    };

    const handleCallEnded = () => {
      setIsCalling(false);
      setStatusText("Online");
      setIsError(false);
    };

    const handleError = (error: any) => {
      console.error("Retell SDK error:", error);
      setIsCalling(false);
      setStatusText("Connection Error");
      setIsError(true);
    };

    retellWebClient.on("call_started", handleCallStarted);
    retellWebClient.on("call_ended", handleCallEnded);
    retellWebClient.on("error", handleError);

    return () => {
      retellWebClient.off("call_started", handleCallStarted);
      retellWebClient.off("call_ended", handleCallEnded);
      retellWebClient.off("error", handleError);
    };
  }, []);

  const handleAction = async () => {
    if (!firstName || !lastName || !phone) {
      alert("Please enter your first name, last name, and phone number first.");
      return;
    }

    setIsError(false);

    if (mode === "voice") {
      setStatusText("Connecting...");
      try {
        const response = await fetch("/api/retell", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ firstName, lastName, phone, mode: "voice" }),
        });

        const data = await response.json();

        if (!response.ok || !data.accessToken) {
          throw new Error("Failed to secure validation token");
        }

        if (retellWebClient) {
          await retellWebClient.startCall({
            accessToken: data.accessToken,
          });
        }

      } catch (error) {
        console.error("Failed to connect voice stream:", error);
        setStatusText("Connection Failed");
        setIsError(true);
        setIsCalling(false);
      }
    } else {
      setStatusText("Connecting Chat...");
      try {
        const response = await fetch("/api/retell", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ firstName, lastName, phone, mode: "text" }),
        });

        if (!response.ok) {
          throw new Error("Failed to forward details to background parser");
        }

        setTextSubmitted(true);
        setStatusText("Chat Connected");
      } catch (error) {
        console.error("Failed to start text session:", error);
        setStatusText("Connection Failed");
        setIsError(true);
      }
    }
  };

  const handleEndCall = () => {
    if (retellWebClient) retellWebClient.stopCall();
  };

  const handleResetWidget = () => {
    setTextSubmitted(false);
    setFirstName("");
    setLastName("");
    setPhone("");
    setStatusText("Online");
  };

  const showFormFields = !isCalling && !textSubmitted;

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-100">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:pt-4">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase block mb-3">Let&apos;s Connect</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5 font-display">
              Talk to an AI Expert. <span className="text-slate-700">Right Now.</span>
            </h2>
            <span className="block w-14 h-0.5 mb-7 bg-gradient-to-r from-[#c9a84c] to-[#e4cb83]" />
            <p className="text-slate-700 text-base leading-relaxed mb-8">
              Have questions about property values, market trends, or listings in The Parkes at Stonebridge? Our AI community expert is available 24/7 with zero wait time. Backed by Mark Solomon&apos;s 20+ years of local experience.
            </p>
            <div className="space-y-4">
              {[
                "Instant market valuations and real-time community trends",
                "Strategic property breakdown and school pipeline insights",
                "Available 24 hours a day, 7 days a week",
                "Seamless handoff to Mark Solomon for custom pricing options"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-slate-900 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 bg-white border border-slate-200 rounded-xl space-y-3 shadow-sm">
              <p className="text-slate-950 font-semibold text-sm font-display">Prefer to reach out directly?</p>
              <a href="tel:+18168535467" className="flex items-center gap-3 text-slate-600 hover:text-[#c9a84c] text-sm transition-colors"><Phone size={15} className="text-[#c9a84c]" />(816) 853-5467</a>
              <a href="mailto:mark@solomonhomeservices.com" className="flex items-center gap-3 text-slate-600 hover:text-[#c9a84c] text-sm transition-colors"><Mail size={15} className="text-[#c9a84c]" />mark@solomonhomeservices.com</a>
              <div className="flex items-center gap-3 text-slate-500 text-sm"><MapPin size={15} className="text-[#c9a84c]" />Serving The Parkes at Stonebridge</div>
            </div>
          </div>

          {/* Right Column: Dynamic Interaction Block */}
          <div className="bg-[#1a2744] rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.2)]">
            <div className="bg-[#111b35] px-6 py-5 flex items-center justify-between border-b border-white/[0.08]">
              <div className="flex items-center bg-white/[0.06] border border-white/[0.08] rounded-full p-1">
                <button
                  type="button"
                  onClick={() => { if (!isCalling && !textSubmitted) setMode("voice"); }}
                  disabled={isCalling || textSubmitted}
                  className={`text-xs font-medium px-4 py-2 rounded-full transition-all duration-200 tracking-wide disabled:opacity-50 ${
                    mode === "voice" ? "bg-[#c9a84c] text-white" : "text-[#8a9bbf] hover:text-white"
                  }`}
                >
                  🎙 Talk to AI Agent
                </button>
                <button
                  type="button"
                  onClick={() => { if (!isCalling && !textSubmitted) setMode("text"); }}
                  disabled={isCalling || textSubmitted}
                  className={`text-xs font-medium px-4 py-2 rounded-full transition-all duration-200 tracking-wide disabled:opacity-50 ${
                    mode === "text" ? "bg-[#c9a84c] text-white" : "text-[#8a9bbf] hover:text-white"
                  }`}
                >
                  💬 Text AI Agent
                </button>
              </div>
              <div className={`flex items-center gap-2 text-xs font-medium ${isError ? "text-red-400" : "text-emerald-400"}`}>
                <span className={`w-2 h-2 rounded-full ${isError ? "bg-red-400" : "bg-emerald-400"} ${isCalling ? "animate-pulse" : ""}`} />
                {statusText}
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-start gap-4 mb-7">
                <div className="w-10 h-10 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#c9a84c]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                </div>
                <div className="bg-white/[0.07] rounded-[0_12px_12px_12px] px-4 py-3 text-sm text-[#e8e0d0] leading-relaxed max-w-[280px]">
                  {isCalling && "Great! The agent is on the line. You can start speaking now."}
                  {textSubmitted && `Awesome, ${firstName}! Your neighborhood chat agent is now initialized. Let's start looking over market details together.`}
                  {showFormFields && "Hi! I'm the AI real estate expert for the Parkes at Stonebridge. I can analyze recent property values, walk through neighborhood amenities, or pull in Mark directly. To get started — what's your name and best phone number?"}
                </div>
              </div>

              {showFormFields && (
                <>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-[11px] font-medium text-[#8a9bbf] tracking-widest uppercase mb-2">First Name</label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First name"
                        className="w-full bg-white/[0.07] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-[#8a9bbf]/50 outline-none focus:border-[#c9a84c] transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-[#8a9bbf] tracking-widest uppercase mb-2">Last Name</label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last name"
                        className="w-full bg-white/[0.07] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-[#8a9bbf]/50 outline-none focus:border-[#c9a84c] transition-colors duration-200"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-[11px] font-medium text-[#8a9bbf] tracking-widest uppercase mb-2">Phone number</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (000) 000-0000"
                      className="w-full bg-white/[0.07] border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-[#8a9bbf]/50 outline-none focus:border-[#c9a84c] transition-colors duration-200"
                    />
                  </div>
                </>
              )}

              {isCalling ? (
                <button 
                  type="button"
                  onClick={handleEndCall}
                  className="w-full mt-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/50 font-bold text-sm py-4 rounded-lg tracking-widest uppercase transition-colors duration-200"
                >
                  End Call
                </button>
              ) : textSubmitted ? (
                <button 
                  type="button"
                  onClick={handleResetWidget}
                  className="w-full mt-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 font-bold text-sm py-4 rounded-lg tracking-widest uppercase transition-colors duration-200"
                >
                  Start Over / New Inquiry
                </button>
              ) : (
                <button 
                  type="button"
                  onClick={handleAction}
                  className="w-full mt-2 bg-[#c9a84c] hover:bg-[#ddb564] text-white font-bold text-sm py-4 rounded-lg tracking-widest uppercase transition-colors duration-200"
                >
                  {mode === "voice" ? "Start Talking to the Agent →" : "Start Chatting with the Agent →"}
                </button>
              )}

              <p className="text-center text-[10px] text-[#8a9bbf]/50 mt-4 leading-relaxed">
                By entering your number, you consent to receive real estate communications from Solomon Home Services. Reply STOP to opt out. Msg & data rates may apply.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
