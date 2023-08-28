import React, { useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import { ThemeProvider } from "./providers/ThemeProvider";
import themes from "./styles/themes";
import { GlobalStyles } from "./styles/global";
import { ThemeContext } from "./contexts/ThemeContext";

export default function App() {
  // const { theme } = useContext(ThemeContext);

  return (
    <StyledThemeProvider theme={themes.dark}>
      <GlobalStyles />
      <Layout />
    </StyledThemeProvider>
  );
}
