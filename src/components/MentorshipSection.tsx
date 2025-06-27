
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const MentorshipSection = () => {
  const steps = [
    "Profile Intake: Share your goals, challenges, and working style",
    "Shortlisting: AI matches you with compatible mentors based on 100+ factors",
    "Connect: Meet potential mentors through guided video calls",
    "Trial: Start with a 2-week mentorship sprint to test compatibility",
    "Optimize: Provide feedback for continuously improving mentor matches"
  ];

  return (
    <section className="section-padding bg-white" id="mentorship">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-innrspark-charcoal">
            AI-Powered Mentorship
          </h2>
          <div className="w-20 h-1 bg-innrspark-yellow mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Mentor matches that feel like magic.
          </p>
        </div>

        <div className="md:flex items-center gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <ul className="space-y-6">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-innrspark-yellow rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <span className="font-bold text-innrspark-charcoal">{index + 1}</span>
                  </div>
                  <div>
                    <p className="text-lg text-gray-800">{step}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h4 className="font-bold text-lg mb-3 text-innrspark-charcoal">
                Why our matching works better
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-innrspark-yellow mr-2" />
                  <span>Personality & communication style compatibility</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-innrspark-yellow mr-2" />
                  <span>Experience with similar challenges, not just job titles</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-innrspark-yellow mr-2" />
                  <span>Values alignment for genuine connection</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative bg-innrspark-charcoal rounded-xl overflow-hidden h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-innrspark-yellow/20 to-transparent"></div>
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Matching Algorithm</h3>
                <p className="text-gray-200 mb-6">
                  Our proprietary algorithm doesn't just match you with mentors based on career paths. We analyze personality traits, communication styles, values, and lived experiences to find mentors who truly understand your unique journey.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="bg-innrspark-yellow/20 text-white px-3 py-1 rounded-full text-sm">Personality Type</span>
                  <span className="bg-innrspark-yellow/20 text-white px-3 py-1 rounded-full text-sm">Communication Style</span>
                  <span className="bg-innrspark-yellow/20 text-white px-3 py-1 rounded-full text-sm">Values Alignment</span>
                  <span className="bg-innrspark-yellow/20 text-white px-3 py-1 rounded-full text-sm">Shared Experiences</span>
                  <span className="bg-innrspark-yellow/20 text-white px-3 py-1 rounded-full text-sm">Career Goals</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center md:text-right">
              <Button 
                onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-innrspark-yellow hover:bg-opacity-90 text-innrspark-charcoal rounded-full btn-hover px-8 py-6"
              >
                Find Your Perfect Mentor Match
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
