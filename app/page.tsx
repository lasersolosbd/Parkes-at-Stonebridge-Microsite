"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NeighborAdvantage from "@/components/NeighborAdvantage";
import MapSection from "@/components/MapSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Home as HouseIcon, Trees, Footprints } from "lucide-react";

function CommunityFeaturesBar() {
  const features = [
    { icon: HouseIcon, label: "Luxury Townhome Community" },
    { icon: Trees, label: "Private Community Park" },
    { icon: Footprints, label: "Walkable Trails" },
  ];

  return (
    <section className="bg-[#0f172a] py-8 px-6 lg:px-16 border-y border-white/10 relative z-20 text-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4 md:px-12">
        {features.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-[#c9a84c]/30">
              <item.icon className="text-[#c9a84c]" size={20} />
            </div>
            <span className="text-white font-display text-xs md:text-sm font-semibold tracking-widest uppercase">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />
      <HeroSection />
      <CommunityFeaturesBar />
      <div className="-mt-8"><NeighborAdvantage /></div>
      <div className="-mt-12"><MapSection /></div>
      <ContactForm />
      <Footer />
    </main>
  );
}
