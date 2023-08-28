import React, { Component } from "react";
import { Container } from "./styles";
import { ThemeContext } from "../../contexts/ThemeContext";

function HOC(HeaderComponent) {
  return class CustomComponent extends Component {
    componentDidUpdate(prevProps, prevState) {
      if (this.props.theme !== prevProps.theme) {
        console.log("Theme changed");
      }
    }
    render() {
      return (
        <ThemeContext.Consumer>
          {(value) => <HeaderComponent {...value} />}
        </ThemeContext.Consumer>
      );
    }
  };
}

class Header extends Component {
  render() {
    return (
      <Container>
        <h1>JStack's Blog</h1>
        <button onClick={this.props.handleToggleTheme}>
          {this.props.theme === "dark" ? "🌞" : "🌚"}
        </button>
      </Container>
    );
  }
}

export default HOC(Header);
