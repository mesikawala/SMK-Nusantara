import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const theme = useTheme();
  const location = useLocation();
  const base = theme === "brutal" ? "/brutal" : "/professional";
  const [mobileOpen, setMobileOpen] = useState(false);
  const isAdmin = localStorage.getItem("isAdmin") === "true"; // ← tambah ini

  const navLinks = [
    { to: `${base}`, label: "Home" },
    { to: `${base}/jurusan`, label: "Jurusan" },
    { to: `${base}/guru`, label: "Guru" },
    { to: `${base}/pendaftaran`, label: "Pendaftaran" },
    // ← hapus { to: `${base}/admin`, label: "Admin" } dari sini
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card theme-border border-b card-shadow">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to={base} className="flex items-center gap-2 font-heading font-bold text-xl text-primary">
          <GraduationCap className="w-7 h-7" />
          <span>SMK Nusantara</span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                location.pathname === link.to
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              } ${theme === "brutal" ? "theme-border" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          {/* ← Tombol Admin hanya muncul kalau isAdmin */}
          {isAdmin && (
            <Link
              to={`${base}/admin`}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                location.pathname === `${base}/admin`
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              } ${theme === "brutal" ? "theme-border" : ""}`}
            >
              ⚙ Admin
            </Link>
          )}
        </div>
        <div className="hidden md:block">
          <Link to="/" className="px-3 py-1.5 text-sm bg-muted text-muted-foreground rounded-lg hover:opacity-80 theme-border">
            ← Pilih Versi
          </Link>
        </div>
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card px-4 pb-4">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 rounded-lg font-medium ${
                location.pathname === link.to ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
              }`}>
              {link.label}
            </Link>
          ))}
          {isAdmin && (
            <Link to={`${base}/admin`} onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 rounded-lg font-medium ${
                location.pathname === `${base}/admin` ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
              }`}>
              ⚙ Admin
            </Link>
          )}
          <Link to="/" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-muted-foreground">← Pilih Versi</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;