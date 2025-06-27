import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { analytics } from "./main"; // Import the analytics instance
import { logEvent } from "firebase/analytics"; // Import logEvent
import React from "react"; // Import React

const queryClient = new QueryClient();

const App = () => {
  React.useEffect(() => {
    // Global click listener for general click tracking
    const handleGlobalClick = (event: MouseEvent) => {
      const targetElement = event.target as HTMLElement;
      logEvent(analytics, "global_click", {
        element_tag: targetElement.tagName,
        element_id: targetElement.id,
        element_class: targetElement.className,
        element_text: targetElement.innerText ? targetElement.innerText.substring(0, 100) : "", // Limit text length
        page_path: window.location.pathname,
        page_title: document.title,
      });
    };

    document.body.addEventListener("click", handleGlobalClick);

    return () => {
      document.body.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  // Example of a specific event logging for a button
  const handleExampleButtonClick = () => {
    logEvent(analytics, "example_button_click", {
      button_name: "Example Button",
      location: "App.tsx",
    });
    alert("Example button clicked! Check Firebase Analytics.");
  };

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
      {/* Example button for specific event tracking demonstration */}
      <button
        onClick={handleExampleButtonClick}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        Log Example Click
      </button>
    </QueryClientProvider>
  );
};

export default App;