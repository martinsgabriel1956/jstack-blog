import React, { useContext } from "react";
import { Container } from "./styles";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Header() {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button onClick={handleToggleTheme}>
        {theme === "dark" ? "🌞" : "🌚"}
      </button>
    </Container>
  );
}
