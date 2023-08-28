import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import { Home } from "./pages/Home";
import { PostsList } from "./components/PostList";

export function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/posts" component={PostsList} />
    </BrowserRouter>
  );
}
