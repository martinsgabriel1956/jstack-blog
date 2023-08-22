import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import { GlobalStyles } from "./styles/global";
import themes from "./styles/themes";

export default function App() {
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
}
