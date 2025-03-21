import React, { createContext, useContext, useState } from "react";
import { Theme } from "@react-navigation/native";
import { theme } from "./theme";
import { useColorScheme } from "react-native";
type ThemeContextType = {
  themeMode: "light" | "dark";
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const scheme = useColorScheme();
  const [themeMode, setThemeMode] = useState<"light" | "dark">(
    scheme === "dark" ? "dark" : "light"
  );

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      value={{ themeMode, theme: theme[themeMode], toggleTheme }}
    >
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
