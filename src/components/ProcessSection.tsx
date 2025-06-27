
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UserCheck, MapPin, Users, CheckCircle, LineChart } from "lucide-react";

export const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Sign Up & Ignite",
      description: "Begin your journey with our comprehensive assessment."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Unlock Insights",
      description: "Discover your unique strengths, values and hidden potentials."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Claim Your Roadmap",
      description: "Get your personalized career path and actionable steps."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Connect with Mentor",
      description: "Match with mentors who understand your specific journey."
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Track & Evolve",
      description: "Monitor your progress and adapt as you grow."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-innrspark-charcoal text-white" id="how-it-works">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            How It Works
          </h2>
          <div className="w-20 h-1 bg-innrspark-yellow mx-auto mb-6"></div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap justify-center gap-3 md:gap-4 mb-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`cursor-pointer transition-all duration-300 ${
                index === activeStep 
                  ? 'scale-105 shadow-lg' 
                  : 'opacity-70 hover:opacity-100'
              }`}
              onClick={() => setActiveStep(index)}
            >
              <div 
                className={`p-4 md:p-6 rounded-xl text-center min-h-[200px] flex flex-col items-center justify-center ${
                  index % 2 === 0 ? 'bg-white text-innrspark-charcoal' : 'bg-innrspark-yellow text-innrspark-charcoal'
                }`}
              >
                <div className="mb-3 md:mb-4">{step.icon}</div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm opacity-90">{step.description}</p>
                
                {index === activeStep && (
                  <div className="mt-3 text-xs font-medium">
                    {index === 0 && "Takes only 15 minutes"}
                    {index === 1 && "Users see 40% faster clarity"}
                    {index === 2 && "95% report feeling more confident"}
                    {index === 3 && "80% find ideal career path"}
                    {index === 4 && "Continuous support & adaptation"}
                  </div>
                )}
              </div>
              <div className="flex justify-center mt-2">
                <span 
                  className={`w-3 h-3 rounded-full ${
                    index === activeStep ? 'bg-innrspark-yellow' : 'bg-white opacity-50'
                  }`}
                ></span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-innrspark-yellow text-innrspark-charcoal hover:bg-opacity-90 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,214,0,0.5)] transition-all px-8 py-6 text-lg rounded-full shadow-lg"
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};
