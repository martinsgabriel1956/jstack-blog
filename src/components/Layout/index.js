import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import PostsList from "../PostList";

export default function Layout({ onToggleTheme, selectedTheme }) {
  useEffect(() => {
    console.debug("Layout mounted");

    return () => {
      console.debug("Layout unmounted");
    };
  }, []);

  return (
    <>
      <Header onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
      <PostsList />
      <Footer onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />
    </>
  );
}
