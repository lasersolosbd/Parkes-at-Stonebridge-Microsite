import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NeighborAdvantage from "@/components/NeighborAdvantage";
import MapSection from "@/components/MapSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Home as HomeIcon, Trees, Footprints } from "lucide-react";

// This bar is now self-contained within this file to ensure it updates correctly
function CommunityFeaturesBar() {
  const communityFeatures = [
    { icon: HomeIcon, label: "Luxury Townhome Community" },
    { icon: Trees, label: "Greenspace for Community Use" },
    { icon: Footprints, label: "Walkable Trails" },
  ];

  return (
    <section className="bg-[#0f172a] py-10 px-6 lg:px-16 border-y border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center gap-8">
        {communityFeatures.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-[#c9a84c]/30 group-hover:border-[#c9a84c] transition-colors duration-500">
              <feature.icon className="text-[#c9a84c]" size={24} />
            </div>
            <span className="text-white font-display text-sm md:text-base font-semibold tracking-wide uppercase">
              {feature.label}
            </span>
            {idx < communityFeatures.length - 1 && (
              <div className="hidden md:block h-8 w-px bg-white/10 ml-8" />
            )}
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
      <NeighborAdvantage />
      <MapSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
