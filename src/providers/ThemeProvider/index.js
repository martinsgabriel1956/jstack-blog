import React, { useState, useMemo } from "react";
import themes from "../../styles/themes";
import { ThemeContext } from "../../contexts/ThemeContext";

export function ThemeProvider(props) {
  const [theme, setTheme] = useState("dark");

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        onToggleTheme: handleToggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
