import React, { createContext, useContext, useState } from "react";
import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";

export type Theme = typeof lightTheme;

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}>({
  theme: lightTheme,
  toggleTheme: () => {},
  isDark: false,
});

// Create the provider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
