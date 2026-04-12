import { createContext, useContext, ReactNode } from "react";

type ThemeVariant = "professional" | "brutal";

const ThemeContext = createContext<ThemeVariant>("professional");

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children, variant }: { children: ReactNode; variant: ThemeVariant }) => (
  <ThemeContext.Provider value={variant}>
    <div className={variant === "brutal" ? "theme-brutal" : ""}>{children}</div>
  </ThemeContext.Provider>
);
