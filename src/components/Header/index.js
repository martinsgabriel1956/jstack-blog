import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "./styles";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Header() {
  const { theme, handleToggleTheme } = useContext(ThemeContext);
  const history = useHistory();

  function handleNavigate() {
    history.push("/");
  }

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button onClick={handleToggleTheme} type="button">
        {theme === "dark" ? "🌞" : "🌚"}
      </button>
      <button
        onClick={handleNavigate}
        type="button"
        style={{
          color: "#fff",
        }}
      >
        Voltar para a home
      </button>
    </Container>
  );
}
