import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../contexts/ThemeContext";

export function Button(props) {
  const { theme } = useContext(ThemeContext);
  const isDarkTheme = theme === "dark";

  return (
    <button
      style={{
        color: isDarkTheme ? "#fff" : "#000",
        background: isDarkTheme ? "#000" : "#fff",
      }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
