
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShareModal } from "./ShareModal";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-innrspark-charcoal shadow-lg py-2' : 'bg-white py-4'
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Static Logo (removed any animation classes) */}
          <a href="#" className="flex items-center">
            <img 
              src="/lovable-uploads/744f1aa7-57e6-473d-be11-8060b871efcf.png" 
              alt="Innrspark Logo" 
              className="h-10 md:h-12" 
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className={`${isScrolled ? 'text-white' : 'text-innrspark-charcoal'} hover:text-innrspark-yellow transition-colors relative group`}>
              What We Do
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-innrspark-yellow group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#how-it-works" className={`${isScrolled ? 'text-white' : 'text-innrspark-charcoal'} hover:text-innrspark-yellow transition-colors relative group`}>
              How It Works
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-innrspark-yellow group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#" 
              className={`${isScrolled ? 'text-white' : 'text-innrspark-charcoal'} hover:text-innrspark-yellow transition-colors relative group`}
              onClick={(e) => {
                e.preventDefault();
                setShowShareModal(true);
              }}
            >
              Share
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-innrspark-yellow group-hover:w-full transition-all duration-300"></span>
            </a>
            <Button 
              onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-innrspark-yellow text-innrspark-charcoal hover:bg-opacity-90 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,214,0,0.5)] transition-all rounded-full"
            >
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className={`md:hidden ${isScrolled ? 'text-white' : 'text-innrspark-charcoal'} hover:bg-innrspark-yellow hover:text-innrspark-charcoal`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-innrspark-charcoal mt-2 p-4 rounded-md shadow-lg">
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-white hover:text-innrspark-yellow transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                What We Do
              </a>
              <a 
                href="#how-it-works" 
                className="text-white hover:text-innrspark-yellow transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#" 
                className="text-white hover:text-innrspark-yellow transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault();
                  setShowShareModal(true);
                  setIsMenuOpen(false);
                }}
              >
                Share
              </a>
              <Button 
                onClick={() => {
                  document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="bg-innrspark-yellow text-innrspark-charcoal hover:bg-opacity-90 hover:scale-105 transition-all rounded-full w-full"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        )}
      </div>
      <ShareModal isOpen={showShareModal} onClose={() => setShowShareModal(false)} />
    </nav>
  );
};
