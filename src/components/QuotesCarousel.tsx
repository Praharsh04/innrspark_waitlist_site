
import { useState, useEffect, useCallback } from "react";
import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface QuoteItem {
  text: string;
  author: string;
}

export const QuotesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // This is for the *exit* animation of the previous quote
  const [slideIn, setSlideIn] = useState(false); // New state for entry animation

  const quotes: QuoteItem[] = [
    {
      text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Take up one idea. Make that one idea your life – think of it, dream of it, live on that idea… This is the way to success.",
      author: "Swami Vivekananda"
    },
    {
      text: "People should pursue what they're passionate about. That will make them happier than pretty much anything else.",
      author: "Elon Musk"
    },
    {
      text: "There is no greater thing you can do with your life and your work than follow your passions – in a way that serves the world and you.",
      author: "Richard Branson"
    },
    {
      text: "One of the huge mistakes people make is that they try to force an interest on themselves. You don't choose your passions; your passions choose you.",
      author: "Jeff Bezos"
    },
    {
      text: "In the world of business, the people who are most successful are those who are doing what they love.",
      author: "Warren Buffett"
    },
    {
      text: "Don't get into something because it is cool. Get into something that you think about constantly, even when you're not supposed to.",
      author: "Nikhil Kamath (Zerodha)"
    },
    // New quotes
    {
      text: "The privilege of a lifetime is to become who you truly are.",
      author: "Carl Jung"
    },
    {
      text: "There is no greater gift you can give or receive than to honor your calling. It's why you were born. And how you become most truly alive.",
      author: "Oprah Winfrey"
    },
    {
      text: "Working hard for something we don't care about is called stress; working hard for something we love is called passion.",
      author: "Simon Sinek"
    },
    {
      text: "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing it is stupid.",
      author: "Albert Einstein"
    },
    {
      text: "Success without fulfillment is the ultimate failure.",
      author: "Tony Robbins"
    },
    {
      text: "The future belongs to young people with an education and the imagination to create.",
      author: "Barack Obama"
    },
    {
      text: "Passion and perseverance for long-term goals — that's what drives success.",
      author: "Angela Duckworth"
    },
    {
      text: "Clarity comes from engagement, not thought.",
      author: "Marie Forleo"
    },
    {
      text: "Most people operate at about 40% of their capability.",
      author: "David Goggins"
    },
    {
      text: "Play long-term games with long-term people.",
      author: "Naval Ravikant"
    },
    {
      text: "The most important thing in your life is your inner experience.",
      author: "Sadhguru"
    }
  ];

  // Auto-rotate quotes every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextQuote();
    }, 6000);
    
    return () => clearInterval(interval); // Cleanup on unmount
  }, [quotes.length]);

  // Effect to trigger slide-in animation when currentIndex changes
  useEffect(() => {
    setSlideIn(false); // Reset for re-triggering animation
    const timer = setTimeout(() => {
      setSlideIn(true); // Trigger slide-in
    }, 50); // Small delay to ensure class is applied before transition
    return () => clearTimeout(timer);
  }, [currentIndex]);


  const nextQuote = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true); // Start exit animation for current quote

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      setIsAnimating(false); // End exit animation
    }, 400); // Duration of exit animation
  }, [isAnimating, quotes.length]);

  const prevQuote = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true); // Start exit animation for current quote

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
      setIsAnimating(false); // End exit animation
    }, 400); // Duration of exit animation
  }, [isAnimating, quotes.length]);

  const goToQuote = useCallback((index: number) => {
    if (isAnimating || index === currentIndex) return;

    setIsAnimating(true); // Start exit animation for current quote

    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false); // End exit animation
    }, 400); // Duration of exit animation
  }, [currentIndex, isAnimating]);

  return (
    <div className="my-16 bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
      {/* Background quote mark */}
      <div 
        className="absolute -bottom-10 -right-10 opacity-5 text-innrspark-yellow"
        style={{ fontSize: '200px', lineHeight: '1' }}
      >
        "
      </div>
      
      <div className="flex flex-col items-center text-center relative z-10">
        {/* Icon */}
        <Quote className="w-10 h-10 text-innrspark-yellow mb-6 animate-pulse-light" />
        
        {/* Quote content with transition */}
        <div className="overflow-hidden relative h-[180px] md:h-[150px] w-full">
          <div
            key={currentIndex} // Add key to force re-render and re-trigger animation
            className={cn(
              "absolute w-full transition-all duration-700 ease-out", // Increased duration for smoother effect
              slideIn ? "translate-x-0 opacity-100" : "translate-x-[-100%] opacity-0"
            )}
          >
            <p className="text-lg md:text-xl font-medium text-innrspark-charcoal mb-4 italic">
              "{quotes[currentIndex].text}"
            </p>
            <p className="text-gray-600 font-medium text-sm">
              — {quotes[currentIndex].author}
            </p>
          </div>
        </div>
        
        {/* Dots navigation */}
        <div className="flex flex-wrap items-center justify-center mt-8 gap-1 max-w-xl">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => goToQuote(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-innrspark-yellow scale-125 shadow-md' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Previous/Next buttons */}
        <div className="flex items-center justify-between w-full mt-8">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={prevQuote}
            disabled={isAnimating}
            className="text-gray-500 hover:text-innrspark-charcoal transition-colors duration-300"
          >
            Previous
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={nextQuote}
            disabled={isAnimating}
            className="text-gray-500 hover:text-innrspark-charcoal transition-colors duration-300"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
