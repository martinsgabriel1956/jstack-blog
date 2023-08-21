import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Button } from "../Button";
import { ThemeContext } from "../../contexts/ThemeContext";
import Title from "../UI/Title";

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Title>{props.title}</Title>
      <Button onClick={onToggleTheme}>Mudar Tema</Button>
      {props.children}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: "JStack's Blog",
};
