import React, {
  useState,
  useMemo,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import { GlobalStyles } from "./styles/global";
import themes from "./styles/themes";

export default function App() {
  const [theme, setTheme] = useState("dark");

  const firstRender = useRef(true);

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  }

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    console.log({ theme });
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Layout onToggleTheme={handleToggleTheme} selectedTheme={theme} />
    </ThemeProvider>
  );
}
