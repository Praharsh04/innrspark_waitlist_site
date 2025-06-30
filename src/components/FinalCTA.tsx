
import { useState } from "react";
import { WaitlistForm } from "./WaitlistForm";
import { Button } from "@/components/ui/button";

import { getAnalytics, logEvent } from "firebase/analytics";
import app from "../firebase";

export const FinalCTA = () => {
  const [showForm, setShowForm] = useState(false);

  const handleJoinWaitlistClick = () => {
    setShowForm(true);
    if (import.meta.env.PROD) {
      logEvent(getAnalytics(app), 'join_waitlist_click');
    }
  };

  return (
    <section className="py-20 bg-innrspark-yellow" id="join">
      <div className="container max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-innrspark-charcoal">
            Ready to Spark Your Future?
          </h2>
          <p className="text-xl text-innrspark-charcoal opacity-90 max-w-2xl mx-auto mb-8">
            Limited spots for our first cohort—secure yours now.
          </p>
          <Button 
            onClick={handleJoinWaitlistClick} 
            className="bg-innrspark-charcoal text-white hover:bg-opacity-90 hover:scale-105 hover:shadow-[0_0_15px_rgba(28,28,28,0.5)] transition-all px-8 py-6 text-lg rounded-full shadow-lg"
          >
            Join the Waitlist
          </Button>

          {showForm && <WaitlistForm onClose={() => setShowForm(false)} />}
          
          <p className="text-sm text-innrspark-charcoal opacity-75 mt-6">
            No credit card required. 100% free early access.
          </p>
        </div>
      </div>
    </section>
  );
};
