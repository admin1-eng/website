import * as React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WatchOnline from "./pages/WatchOnline";
import Partner from "./pages/Partner";
import AboutUs from "./pages/AboutUs";
import VisitUs from "./pages/VisitUs";
import GetTheApp from "./pages/GetTheApp";
import NotFound from "./pages/NotFound";

const App = () => {
  const queryClient = React.useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            gcTime: Infinity,
          },
        },
      }),
    []
  );

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/watch-online" element={<WatchOnline />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/visit-us" element={<VisitUs />} />
            <Route path="/get-the-app" element={<GetTheApp />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
