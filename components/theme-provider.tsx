"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

const ThemeContext = createContext<{
  theme: string;
  setTheme: (theme: string) => void;
}>({
  theme: "light",
  setTheme: () => {},
});

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "light",
  enableSystem = false,
  disableTransitionOnChange = false,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    // Handle system theme if enabled
    if (enableSystem) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      setTheme(systemTheme);
    }

    // Apply theme to document
    const root = document.documentElement;
    if (attribute === "class") {
      root.classList.remove("light", "dark");
      root.classList.add(theme);
    }

    // Disable transitions if requested
    if (disableTransitionOnChange) {
      root.style.transition = "none";
      setTimeout(() => {
        root.style.transition = "";
      }, 0);
    }
  }, [theme, attribute, enableSystem, disableTransitionOnChange]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Optional: Hook to access theme context
export const useTheme = () => useContext(ThemeContext);