import React, { useContext } from "react";
import { Container } from "./styles";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Header({ onToggleTheme, selectedTheme }) {
  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button onClick={onToggleTheme}>
        {selectedTheme === "dark" ? "🌞" : "🌚"}
      </button>
    </Container>
  );
}
