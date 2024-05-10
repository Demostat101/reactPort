import { createContext, useContext, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import { useState } from "react";

export const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [menu, setMenu] = useState(false);

  const handleMenuChange = () => {
    setMenu((m) => !m);
  };

  const [isDarkMode, setIsDarkMode] = useLocalStorage(true);

  const toggleTheme = () => {
    setIsDarkMode((prevSate) => !prevSate);
  };

  const theme = isDarkMode ? "dark" : "light";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, menu, setMenu, handleMenuChange }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
