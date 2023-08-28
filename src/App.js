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

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider>
        <button
          onClick={() => this.setState({ isChanged: !this.state.isChanged })}
        >
          Change state
        </button>
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
