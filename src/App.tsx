import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { RegistrationProvider } from "@/contexts/RegistrationContext";
import SchoolLayout from "@/components/SchoolLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <RegistrationProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Index />} />
            <Route path="/professional/*" element={<SchoolLayout variant="professional" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </RegistrationProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
