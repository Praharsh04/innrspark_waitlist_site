
import { useState } from "react";
import { Linkedin, Twitter, Facebook, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const ShareSection = () => {
  const shareUrl = window.location.href;
  const shareTitle = "Innrspark - Discover Your Inner Spark";
  const shareMessage = "Know someone who needs a spark? Share Innrspark and help them explore, empower, evolve.";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success("Link copied to clipboard!");
  };

  const handleShare = (platform: string) => {
    let url = '';
    
    switch (platform) {
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'whatsapp':
        url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`;
        break;
      default:
        handleCopyLink();
        return;
    }
    
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=500');
  };

  return (
    <section className="section-padding bg-gray-50" id="share">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-innrspark-charcoal">
            Share Your <span className="text-innrspark-yellow">Spark</span>
          </h2>
          <div className="w-20 h-1 bg-innrspark-yellow mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10">
            Know someone who needs a spark? Share Innrspark and help them explore, empower, evolve.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2 border-2 border-innrspark-yellow bg-white text-innrspark-charcoal hover:bg-innrspark-yellow hover:scale-105 transition-all p-6 rounded-xl shadow-sm"
            onClick={() => handleShare('linkedin')}
          >
            <Linkedin className="w-6 h-6" />
            <span className="font-medium">LinkedIn</span>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2 border-2 border-innrspark-yellow bg-white text-innrspark-charcoal hover:bg-innrspark-yellow hover:scale-105 transition-all p-6 rounded-xl shadow-sm"
            onClick={() => handleShare('twitter')}
          >
            <Twitter className="w-6 h-6" />
            <span className="font-medium">Twitter</span>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2 border-2 border-innrspark-yellow bg-white text-innrspark-charcoal hover:bg-innrspark-yellow hover:scale-105 transition-all p-6 rounded-xl shadow-sm"
            onClick={() => handleShare('facebook')}
          >
            <Facebook className="w-6 h-6" />
            <span className="font-medium">Facebook</span>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2 border-2 border-innrspark-yellow bg-white text-innrspark-charcoal hover:bg-innrspark-yellow hover:scale-105 transition-all p-6 rounded-xl shadow-sm"
            onClick={() => handleShare('whatsapp')}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-6 h-6" 
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.6 6.2c-1.5-1.5-3.4-2.3-5.5-2.3-4.3 0-7.8 3.5-7.8 7.8 0 1.4.4 2.7 1 3.9l-1.1 4 4.1-1.1c1.1.6 2.5 1 3.8 1 4.3 0 7.8-3.5 7.8-7.8 0-2.1-.8-4-2.3-5.5zm-5.5 12c-1.2 0-2.3-.3-3.3-.9l-.2-.1-2.4.6.6-2.4-.2-.2c-.6-1-1-2.2-1-3.4 0-3.6 2.9-6.5 6.5-6.5 1.7 0 3.3.7 4.5 1.9s1.9 2.8 1.9 4.5c0 3.7-2.9 6.5-6.4 6.5zm3.5-4.8c-.2-.1-1.1-.6-1.3-.6-.2-.1-.3-.1-.4.1-.1.2-.5.6-.6.8-.1.1-.2.1-.4 0-.2-.1-.8-.3-1.5-.9-.5-.5-.9-1-.9-1.2-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.4.1-.1.1-.2.2-.3.1-.1 0-.2 0-.3 0-.1-.4-1-.6-1.4-.2-.4-.3-.3-.4-.3h-.4c-.1 0-.3.1-.5.2-.2.1-.6.6-.6 1.5s.6 1.7.7 1.8c.1.1 1 1.7 2.5 2.4 1.5.7 1.5.5 1.8.4.3 0 .9-.4 1-.7.1-.3.1-1.1-.1-1.4-.1-.2-.3-.3-.5-.4z"/>
            </svg>
            <span className="font-medium">WhatsApp</span>
          </Button>
          
          <Button
            variant="default"
            size="lg"
            className="flex items-center gap-2 bg-innrspark-yellow text-innrspark-charcoal hover:bg-opacity-90 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,214,0,0.5)] transition-all p-6 rounded-xl shadow-sm"
            onClick={handleCopyLink}
          >
            <Share2 className="w-6 h-6" />
            <span className="font-medium">Copy Link</span>
          </Button>
        </div>
      </div>
    </section>
  );
};
