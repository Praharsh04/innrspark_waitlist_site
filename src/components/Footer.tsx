
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-innrspark-charcoal text-white py-12">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/744f1aa7-57e6-473d-be11-8060b871efcf.png" 
                alt="Innrspark Logo" 
                className="h-10 mr-2"
              />
              <span className="text-2xl font-bold">Innrspark</span>
            </div>
            <p className="text-gray-300 mb-4">
              Helping young minds discover their unique spark through AI-powered psychometric testing and mentorship.
            </p>
            <div className="flex space-x-3">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-innrspark-yellow hover:text-innrspark-charcoal hover:scale-105 transition-all"
                asChild
              >
                <a href="https://www.instagram.com/innrspark/" target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-innrspark-yellow hover:text-innrspark-charcoal hover:scale-105 transition-all"
                asChild
              >
                <a href="https://www.linkedin.com/in/innrspark-352b85364/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full hover:bg-innrspark-yellow hover:text-innrspark-charcoal hover:scale-105 transition-all"
                asChild
              >
                <a href="https://x.com/innrspark" target="_blank" rel="noopener noreferrer">
                  <Twitter size={20} />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-innrspark-yellow transition-colors">What We Do</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-innrspark-yellow transition-colors">How it Works</a></li>
              <li><a href="#share" className="text-gray-300 hover:text-innrspark-yellow transition-colors">Share</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-innrspark-yellow transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          
          
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:help@innrspark.com" className="text-gray-300 hover:text-innrspark-yellow transition-colors">
                  help@innrspark.com
                </a>
              </li>
              <li>
                <a href="mailto:info@innrspark.com" className="text-gray-300 hover:text-innrspark-yellow transition-colors">
                  info@innrspark.com
                </a>
              </li>
              <li>
                <a href="mailto:innrspark@gmail.com" className="text-gray-300 hover:text-innrspark-yellow transition-colors">
                  innrspark@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:9307201876" className="text-gray-300 hover:text-innrspark-yellow transition-colors">
                  9307201876
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Innrspark. All rights reserved.
          </p>
          <p className="text-innrspark-yellow text-sm font-light italic">
            Innrspark — Explore. Empower. Evolve.
          </p>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-gray-400 text-xs">
            Built in India. Designed for dreamers.
          </p>
        </div>
      </div>
    </footer>
  );
};
