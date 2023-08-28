import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export class ThemeProvider extends Component {
  constructor(props) {
    super(props);

    let theme = "dark";

    try {
      theme = JSON.parse(localStorage.getItem("theme"));
    } catch (error) {
      console.log(error);
    }

    this.state = {
      theme,
    };
  }

  handleToggleTheme = () => {
    const storageTheme = () => {
      localStorage.setItem("theme", JSON.stringify(this.state.theme));
    };

    this.setState(
      (prevState) => ({
        theme: prevState.theme === "dark" ? "light" : "dark",
      }),
      storageTheme
    );
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
