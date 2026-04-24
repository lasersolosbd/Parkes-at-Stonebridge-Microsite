import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NeighborAdvantage from "@/components/NeighborAdvantage";
import MapSection from "@/components/MapSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Home as HomeIcon, Trees, Footprints } from "lucide-react";

function CommunityFeaturesBar() {
  const communityFeatures = [
    { icon: HomeIcon, label: "Luxury Townhome Community" },
    { icon: Trees, label: "Private Community Park" },
    { icon: Footprints, label: "Walkable Trails" },
  ];

  return (
    <section className="bg-[#0f172a] py-8 px-6 lg:px-16 border-y border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4 md:px-12">
        {communityFeatures.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-[#c9a84c]/30">
              <feature.icon className="text-[#c9a84c]" size={20} />
            </div>
            <span className="text-white font-display text-xs md:text-sm font-semibold tracking-widest uppercase">
              {feature.label}
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
      <div className="-mt-12"> {/* Tightening the gap to lifestyle section */}
        <NeighborAdvantage />
      </div>
      <div className="-mt-20"> {/* Tightening the gap to map section */}
        <MapSection />
      </div>
      <ContactForm />
      <Footer />
    </main>
  );
}
