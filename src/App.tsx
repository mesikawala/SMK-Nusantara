import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { RegistrationProvider } from "@/contexts/RegistrationContext";
import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import Index from "./pages/Index";
import Jurusan from "./pages/Jurusan";
import Guru from "./pages/Guru";
import Pendaftaran from "./pages/Pendaftaran";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ThemeProvider>
        <RegistrationProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/jurusan" element={<Jurusan />} />
              <Route path="/guru" element={<Guru />} />
              <Route path="/pendaftaran" element={<Pendaftaran />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ThemeToggle />
          </BrowserRouter>
        </RegistrationProvider>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
