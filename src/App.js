import React, { Component } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import { ThemeProvider } from "./providers/ThemeProvider";
import themes from "./styles/themes";
import { GlobalStyles } from "./styles/global";
import { ThemeContext } from "./contexts/ThemeContext";

export default class App extends Component {
  componentDidMount() {
    console.log("App mounted");
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyles />
              <Layout />
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}
