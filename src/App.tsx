import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { analytics } from "./main";
import { logEvent, setUserId, setUserProperties } from "firebase/analytics";
import React from "react";

const queryClient = new QueryClient();

// Helper to get device category
const getDeviceCategory = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(Jasmine|Opera Mini|Opera Mobi|Skyfire|Tear|WAP|Windows Phone|iemobile)|Fennec|BrowserNG|Nokia|Series60|Symbian|Windows CE|PlayStation|PSP|Nintendo|Xbox/i.test(ua)) {
    return "mobile";
  }
  return "desktop";
};

// Helper to parse UTM parameters
const getUtmParameters = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
    utm_term: params.get("utm_term"),
    utm_content: params.get("utm_content"),
  };
};

const App = () => {
  React.useEffect(() => {
    // Set a unique user ID for anonymous tracking (can be replaced with actual user ID if logged in)
    const userId = localStorage.getItem("firebase_user_id") || `anon_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    setUserId(analytics, userId);
    localStorage.setItem("firebase_user_id", userId);

    // Set user properties (device category)
    setUserProperties(analytics, {
      device_category: getDeviceCategory(),
    });

    // Log page_view event
    const utmParams = getUtmParameters();
    logEvent(analytics, "page_view", {
      page_path: window.location.pathname,
      page_location: window.location.href,
      page_referrer: document.referrer,
      device_category: getDeviceCategory(),
      ...utmParams,
    });

    // Log campaign_tracking event if UTM parameters are present
    if (Object.values(utmParams).some(param => param !== null)) {
      logEvent(analytics, "campaign_tracking", {
        ...utmParams,
        page_path: window.location.pathname,
      });
    }

    // Log session_start if user stays longer than 10 seconds
    const sessionStartTimer = setTimeout(() => {
      logEvent(analytics, "session_start", {
        page_path: window.location.pathname,
        device_category: getDeviceCategory(),
        ...utmParams,
      });
    }, 10000);

    // Scroll depth tracking
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = window.scrollY;
      const scrollPercent = (scrolled / scrollHeight) * 100;

      if (scrollPercent >= 75) {
        logEvent(analytics, "scroll_depth", {
          scroll_percent: 75,
          page_path: window.location.pathname,
          device_category: getDeviceCategory(),
        });
        window.removeEventListener("scroll", handleScroll); // Log once
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(sessionStartTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
