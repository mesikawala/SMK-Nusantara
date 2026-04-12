import { createContext, useContext, useState, ReactNode } from "react";

type ThemeVariant = "professional" | "brutal";

interface ThemeContextType {
  theme: ThemeVariant;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({ theme: "professional", toggleTheme: () => {} });

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeVariant>("professional");
  const toggleTheme = () => setTheme((t) => (t === "professional" ? "brutal" : "professional"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "brutal" ? "theme-brutal" : ""}>{children}</div>
    </ThemeContext.Provider>
  );
};
