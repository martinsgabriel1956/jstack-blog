import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import { GlobalStyles } from "./styles/global";
import themes from "./styles/themes";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "dark",
    };

    this.handleToggleTheme = this.handleToggleTheme.bind(this);
  }

  handleToggleTheme() {
    this.setState(({ theme }) => ({
      theme: theme === "dark" ? "light" : "dark",
    }));
  }

  render() {
    const { theme } = this.state;

    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyles />
        <Layout onToggleTheme={this.handleToggleTheme} selectedTheme={theme} />
      </ThemeProvider>
    );
  }
}
