import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import Jurusan from "@/pages/Jurusan";
import Guru from "@/pages/Guru";
import Pendaftaran from "@/pages/Pendaftaran";
import Admin from "@/pages/Admin";
import NotFound from "@/pages/NotFound";

const SchoolLayout = ({ variant }: { variant: "professional" | "brutal" }) => (
  <ThemeProvider variant={variant}>
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="jurusan" element={<Jurusan />} />
        <Route path="guru" element={<Guru />} />
        <Route path="pendaftaran" element={<Pendaftaran />} />
        <Route path="admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </ThemeProvider>
);

export default SchoolLayout;
