import React from "react";
import { Route } from "react-router-dom";
import { Home, NotFound, Posts, Post } from "./pages";
import { Switch } from "react-router-dom";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/posts/" component={Posts} />
      <Route path="/posts/:id" component={Post} />
      <Route component={NotFound} />
    </Switch>
  );
}
