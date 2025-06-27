// src/lib/share-utils.ts

import { toast } from "sonner";

interface ShareData {
  title?: string;
  text?: string;
  url?: string;
  image?: string; // For meta tags, not directly shareable via Web Share API for all platforms
}

/**
 * Checks if the Web Share API is supported by the browser.
 * @returns {boolean} True if Web Share API is supported, false otherwise.
 */
export const isWebShareApiSupported = (): boolean => {
  return navigator.share !== undefined;
};

/**
 * Attempts to share content using the Web Share API.
 * @param {ShareData} data - The data to share (title, text, url).
 * @returns {Promise<void>} A promise that resolves if sharing is successful, or rejects on failure.
 */
export const shareViaWebShareApi = async (data: ShareData): Promise<void> => {
  try {
    await navigator.share(data);
    toast.success("Content shared successfully!");
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      // User cancelled the share operation
      console.log("Web Share API: Share cancelled by user.");
    } else {
      console.error("Web Share API: Error sharing content:", error);
      toast.error("Failed to share content.");
      throw new Error("Web Share API failed.");
    }
  }
};

/**
 * Copies text to the clipboard.
 * @param {string} text - The text to copy.
 * @returns {Promise<void>} A promise that resolves if copying is successful, or rejects on failure.
 */
export const copyToClipboard = async (text: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success("Link copied to clipboard!");
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
    toast.error("Failed to copy link.");
    throw new Error("Failed to copy to clipboard.");
  }
};

/**
 * Generates a share URL for a given platform.
 * @param {string} platform - The target sharing platform (e.g., 'facebook', 'twitter', 'linkedin', 'whatsapp', 'telegram', 'email').
 * @param {ShareData} data - The data to share (title, text, url).
 * @returns {string} The generated share URL.
 */
export const generateShareUrl = (platform: string, data: ShareData): string => {
  const encodedUrl = encodeURIComponent(data.url || window.location.href);
  const encodedTitle = encodeURIComponent(data.title || document.title);
  const encodedText = encodeURIComponent(data.text || '');

  switch (platform) {
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    case 'twitter':
      return `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
    case 'linkedin':
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedText}`;
    case 'whatsapp':
      return `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`;
    case 'telegram':
      return `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;
    case 'email':
      return `mailto:?subject=${encodedTitle}&body=${encodedText}%0A${encodedUrl}`;
    default:
      return '';
  }
};

/**
 * Opens a new window for sharing on a specific platform.
 * @param {string} url - The share URL to open.
 */
export const openShareWindow = (url: string): void => {
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=500');
  }
};
