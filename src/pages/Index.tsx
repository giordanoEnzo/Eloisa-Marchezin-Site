import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FormationSection from "@/components/FormationSection";
import MissionSection from "@/components/MissionSection";
import SessionSection from "@/components/SessionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <div id="formacao">
        <FormationSection />
      </div>
      <div id="missao">
        <MissionSection />
      </div>
      <SessionSection />
      <div id="depoimentos">
        <TestimonialsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
