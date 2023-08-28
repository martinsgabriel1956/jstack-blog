import React from "react";
import { Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { PostsList } from "./components/PostList";

export function Routes() {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/posts" component={PostsList} />
    </>
  );
}
