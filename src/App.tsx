import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { getAnalytics, logEvent } from "firebase/analytics";
import app from "./firebase";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import React from "react";
import { useScrollDepth } from "./hooks/use-scroll-depth";

const queryClient = new QueryClient();

const analytics = getAnalytics(app);

const TrackPageView = () => {
  const location = useLocation();
  useEffect(() => {
    if (import.meta.env.PROD) {
      logEvent(analytics, 'page_view', {
        page_path: location.pathname,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [location]);
  return null;
};

const App = () => {
  useScrollDepth();
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <TrackPageView />
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
