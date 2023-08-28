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

  componentDidUpdate = (_, prevState) => {
    if (prevState.theme !== this.state.theme) {
      localStorage.setItem("theme", JSON.stringify(this.state.theme));
    }
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
