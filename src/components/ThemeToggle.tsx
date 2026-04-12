import { useTheme } from "@/contexts/ThemeContext";
import { Palette } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-primary text-primary-foreground font-heading font-bold theme-border elevated-shadow rounded-lg hover:opacity-90 transition-opacity"
    >
      <Palette className="w-5 h-5" />
      <span className="hidden sm:inline">
        {theme === "professional" ? "Neo-Brutalism" : "Profesional"}
      </span>
    </button>
  );
};

export default ThemeToggle;
