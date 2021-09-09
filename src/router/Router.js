import React from "react";
import { Route, Switch } from "react-router-dom";
import { home, log_in } from "./routes";
import Home from "../components/home/Home";
import Login from "../components/form/Login";

export default function Router() {
  return (
    <Switch>
      <Route exact path={home} component={Home} />
      <Route exact path={log_in} component={Login} />
    </Switch>
  );
}
