
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TargetSection } from "@/components/TargetSection";
import { ProcessSection } from "@/components/ProcessSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { EnthusiasmStatement } from "@/components/EnthusiasmStatement";
import { Toaster } from "@/components/ui/sonner";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TargetSection />
      <ProcessSection />
      <EnthusiasmStatement />
      <FaqSection />
      <FinalCTA />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
