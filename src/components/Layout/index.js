import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import PostsList from "../PostList";

export default class Layout extends Component {
  componentDidMount() {
    console.log("Layout mounted");
    document.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    console.log("Layout unmounted");
    document.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    console.log("handleScroll");
  };

  render() {
    return (
      <>
        <Header />
        <PostsList />
        <Footer />
      </>
    );
  }
}
