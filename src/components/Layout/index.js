import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import PostsList from "../PostList";
import { Routes } from "../../Routes";

export default function Layout() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}
