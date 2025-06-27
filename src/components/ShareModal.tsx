// src/components/ShareModal.tsx

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Facebook, Share2, Mail, Send } from "lucide-react";
import { isWebShareApiSupported, shareViaWebShareApi, copyToClipboard, generateShareUrl, openShareWindow } from "@/lib/share-utils";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  shareData?: {
    title?: string;
    text?: string;
    url?: string;
  };
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, shareData }) => {
  const defaultShareData = React.useMemo(() => ({
    title: "Innrspark - Discover Your Inner Spark",
    text: "Explore. Empower. Evolve. Discover your true potential with Innrspark!",
    url: window.location.href,
    ...shareData,
  }), [shareData]);

  const handleNativeShare = React.useCallback(async () => {
    if (isWebShareApiSupported()) {
      try {
        await shareViaWebShareApi(defaultShareData);
        onClose(); // Close modal after successful native share
      } catch (error) {
        // If native share fails or is cancelled, fallback to desktop modal
        console.error("Native share failed or cancelled, falling back to modal.", error);
      }
    } else {
      // This case should ideally not be reached if isWebShareApiSupported is checked before calling
      console.warn("Web Share API not supported, showing modal.");
    }
  }, [defaultShareData, onClose]);

  // Attempt native share on mobile if supported
  React.useEffect(() => {
    if (isOpen && isWebShareApiSupported() && /Mobi|Android/i.test(navigator.userAgent)) {
      handleNativeShare();
    }
  }, [isOpen, handleNativeShare]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white text-innrspark-charcoal rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-2">Share Innrspark</DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Spread the word about Innrspark!
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          <Button
            variant="outline"
            className="flex items-center justify-center gap-2 border-2 border-innrspark-yellow bg-white text-innrspark-charcoal hover:bg-innrspark-yellow hover:scale-105 transition-all p-4 rounded-xl shadow-sm"
            onClick={() => openShareWindow(generateShareUrl('linkedin', defaultShareData))}
          >
            <Linkedin className="w-5 h-5" /> LinkedIn
          </Button>
          <Button
            variant="outline"
            className="flex items-center justify-center gap-2 border-2 border-innrspark-yellow bg-white text-innrspark-charcoal hover:bg-innrspark-yellow hover:scale-105 transition-all p-4 rounded-xl shadow-sm"
            onClick={() => openShareWindow(generateShareUrl('twitter', defaultShareData))}
          >
            <Twitter className="w-5 h-5" /> Twitter/X
          </Button>
          <Button
            variant="outline"
            className="flex items-center justify-center gap-2 border-2 border-innrspark-yellow bg-white text-innrspark-charcoal hover:bg-innrspark-yellow hover:scale-105 transition-all p-4 rounded-xl shadow-sm"
            onClick={() => openShareWindow(generateShareUrl('facebook', defaultShareData))}
          >
            <Facebook className="w-5 h-5" /> Facebook
          </Button>
          <Button
            variant="outline"
            className="flex items-center justify-center gap-2 border-2 border-innrspark-yellow bg-white text-innrspark-charcoal hover:bg-innrspark-yellow hover:scale-105 transition-all p-4 rounded-xl shadow-sm"
            onClick={() => openShareWindow(generateShareUrl('whatsapp', defaultShareData))}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-5 h-5" 
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.6 6.2c-1.5-1.5-3.4-2.3-5.5-2.3-4.3 0-7.8 3.5-7.8 7.8 0 1.4.4 2.7 1 3.9l-1.1 4 4.1-1.1c1.1.6 2.5 1 3.8 1 4.3 0 7.8-3.5 7.8-7.8 0-2.1-.8-4-2.3-5.5zm-5.5 12c-1.2 0-2.3-.3-3.3-.9l-.2-.1-2.4.6.6-2.4-.2-.2c-.6-1-1-2.2-1-3.4 0-3.6 2.9-6.5 6.5-6.5 1.7 0 3.3.7 4.5 1.9s1.9 2.8 1.9 4.5c0 3.7-2.9 6.5-6.4 6.5zm3.5-4.8c-.2-.1-1.1-.6-1.3-.6-.2-.1-.3-.1-.4.1-.1.2-.5.6-.6.8-.1.1-.2.1-.4 0-.2-.1-.8-.3-1.5-.9-.5-.5-.9-1-.9-1.2-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.4.1-.1.1-.2.2-.3.1-.1 0-.2 0-.3 0-.1-.4-1-.6-1.4-.2-.4-.3-.3-.4-.3h-.4c-.1 0-.3.1-.5.2-.2.1-.6.6-.6 1.5s.6 1.7.7 1.8c.1.1 1 1.7 2.5 2.4 1.5.7 1.5.5 1.8.4.3 0 .9-.4 1-.7.1-.3.1-1.1-.1-1.4-.1-.2-.3-.3-.5-.4z"/>
            </svg> WhatsApp
          </Button>
          <Button
            variant="outline"
            className="flex items-center justify-center gap-2 border-2 border-innrspark-yellow bg-white text-innrspark-charcoal hover:bg-innrspark-yellow hover:scale-105 transition-all p-4 rounded-xl shadow-sm"
            onClick={() => openShareWindow(generateShareUrl('telegram', defaultShareData))}
          >
            <Send className="w-5 h-5" /> Telegram
          </Button>
          <Button
            variant="outline"
            className="flex items-center justify-center gap-2 border-2 border-innrspark-yellow bg-white text-innrspark-charcoal hover:bg-innrspark-yellow hover:scale-105 transition-all p-4 rounded-xl shadow-sm"
            onClick={() => openShareWindow(generateShareUrl('email', defaultShareData))}
          >
            <Mail className="w-5 h-5" /> Email
          </Button>
        </div>
        <Button
          className="w-full bg-innrspark-charcoal text-white hover:bg-innrspark-charcoal/90 hover:scale-105 transition-all p-4 rounded-xl shadow-sm mt-4"
          onClick={() => copyToClipboard(defaultShareData.url || window.location.href)}
        >
          <Share2 className="w-5 h-5 mr-2" /> Copy Link
        </Button>
      </DialogContent>
    </Dialog>
  );
};
