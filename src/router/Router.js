import React from "react";
import { Route, Switch } from "react-router-dom";
import { home } from "./routes";
import Home from "../components/home/Home";

export default function Router() {
  return (
    <Switch>
      <Route exact path={home} component={Home} />
    </Switch>
  );
}
