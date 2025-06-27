
import { Button } from "@/components/ui/button";
import { Compass, Lightbulb, Award } from "lucide-react";
import { QuotesCarousel } from "./QuotesCarousel";

export const AboutSection = () => {
  return (
    <section className="section-padding bg-white" id="about">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-innrspark-charcoal">
            What We Do
          </h2>
          <div className="w-20 h-1 bg-innrspark-yellow mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Explore Pillar */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-innrspark-yellow rounded-full flex items-center justify-center">
                <Compass className="w-8 h-8 text-innrspark-charcoal" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-innrspark-charcoal">
              Explore
            </h3>
            <p className="text-gray-700 text-center">
              AI-driven psychometrics to map your true strengths and unlock your unique potential.
            </p>
          </div>
          
          {/* Empower Pillar */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-innrspark-yellow rounded-full flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-innrspark-charcoal" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-innrspark-charcoal">
              Empower
            </h3>
            <p className="text-gray-700 text-center">
              Custom roadmaps & hand-picked resources tailored to your personal journey.
            </p>
          </div>
          
          {/* Evolve Pillar */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-innrspark-yellow rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-innrspark-charcoal" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-innrspark-charcoal">
              Evolve
            </h3>
            <p className="text-gray-700 text-center">
              Mentorship & progress tracking for real-world success and continuous growth.
            </p>
          </div>
        </div>
        
        {/* Quotes Carousel - replaces the single Steve Jobs quote */}
        <QuotesCarousel />
        
        <div className="mt-16 bg-gradient-to-r from-innrspark-charcoal to-black p-8 md:p-12 rounded-2xl text-white">
          <div className="flex flex-col items-start">
            <div className="w-full">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">What Is Innrspark?</h3>
              <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl">
                Innrspark is your personalized self-discovery and career-navigation engine—combining science, AI, and mentorship to help you find, follow, and fuel your true potential.
              </p>
              <Button 
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-innrspark-yellow text-innrspark-charcoal hover:bg-opacity-90 rounded-full btn-hover"
              >
                Learn How It Works
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
