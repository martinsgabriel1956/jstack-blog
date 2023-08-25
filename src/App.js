import React, { useState, useMemo, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import { GlobalStyles } from "./styles/global";
import themes from "./styles/themes";

export default function App() {
  const [theme, setTheme] = useState("dark");

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <button onClick={handleToggleTheme}>Change theme</button>
      {theme === "dark" && (
        <Layout onToggleTheme={handleToggleTheme} selectedTheme={theme} />
      )}
    </ThemeProvider>
  );
}
