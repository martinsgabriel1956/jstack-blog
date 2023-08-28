import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export class ThemeProvider extends Component {
  state = {
    theme: "dark",
  };

  handleToggleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === "dark" ? "light" : "dark",
    }));
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          handleToggleTheme: this.handleToggleTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
