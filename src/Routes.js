import React from "react";
import { Route } from "react-router-dom";
import { Home, NotFound, Posts } from "./pages";
import { Switch } from "react-router-dom";

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/posts" component={Posts} />
      <Route component={NotFound} />
    </Switch>
  );
}
