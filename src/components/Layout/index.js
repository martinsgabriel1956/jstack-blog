import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import PostsList from "../PostList";

export default class Layout extends Component {
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
