import React, { Component } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import { ThemeProvider } from "./providers/ThemeProvider";
import themes from "./styles/themes";
import { GlobalStyles } from "./styles/global";
import { ThemeContext } from "./contexts/ThemeContext";

export default class App extends Component {
  state = {
    isChanged: false,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("App mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", {
      currentState: this.state,
      prevState,
      prevProps,
    });
  }

  componentDidCatch(error, info) {
    console.log("componentDidCatch", {
      error,
      info,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", {
      currentState: this.state,
      nextState,
      nextProps,
    });

    return true;
  }

  render() {
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme, handleToggleTheme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyles />
              <button onClick={handleToggleTheme}>Change state</button>
              {theme === "dark" && <Layout />}
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}
