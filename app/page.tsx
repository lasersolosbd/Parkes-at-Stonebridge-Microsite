import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import NeighborAdvantage from "@/components/NeighborAdvantage";
import MapSection from "@/components/MapSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <NeighborAdvantage />
      <MapSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
