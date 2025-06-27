
import { useState, useEffect } from "react";
import { WaitlistForm } from "./WaitlistForm";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    // Start pulsing animation after 3 seconds
    const timer = setTimeout(() => {
      setIsPulsing(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden bg-white text-innrspark-charcoal">
      {/* Simplified background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-innrspark-yellow rounded-full opacity-10 animate-float" />
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-innrspark-yellow rounded-full opacity-10 animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container max-w-6xl z-10 text-center mt-16 md:mt-0">
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/744f1aa7-57e6-473d-be11-8060b871efcf.png" 
            alt="Innrspark Logo" 
            className="w-40 md:w-56"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-innrspark-charcoal">
          Discover Your <span className="text-innrspark-yellow">Innrspark</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-10">
          Explore. Empower. Evolve.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button 
            onClick={() => setShowForm(true)} 
            className={`bg-innrspark-yellow hover:bg-opacity-90 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,214,0,0.5)] transition-all text-innrspark-charcoal px-8 py-6 text-lg rounded-full shadow-lg ${
              isPulsing ? 'animate-pulse' : ''
            }`}
          >
            Join the Waitlist
          </Button>

          <Button 
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            variant="outline" 
            className="border-innrspark-charcoal text-innrspark-charcoal hover:bg-innrspark-charcoal hover:bg-opacity-10 hover:scale-105 transition-all px-8 py-6 text-lg rounded-full shadow-lg"
          >
            How It Works
          </Button>
        </div>

        {showForm && <WaitlistForm onClose={() => setShowForm(false)} />}
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-innrspark-charcoal hover:bg-innrspark-charcoal hover:bg-opacity-10"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDown />
          </Button>
        </div>
      </div>

      {/* Simplified ad strip */}
      <div className="w-full bg-gray-50 py-6 md:py-8 mt-10">
        <div className="container max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-lg md:text-xl font-medium text-innrspark-charcoal mb-4 md:mb-0">
              Life's too short for the wrong path.
              <span className="font-semibold text-innrspark-yellow"> Discover your spark.</span>
            </p>
            <Button 
              onClick={() => setShowForm(true)}
              variant="outline"
              className="border-innrspark-yellow text-innrspark-charcoal hover:bg-innrspark-yellow hover:scale-105 hover:shadow-[0_0_15px_rgba(255,214,0,0.5)] transition-all px-6 py-2 text-sm rounded-full"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
