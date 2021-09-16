import React from "react";
import { Route, Switch } from "react-router-dom";
import { home } from "./routes";
import Home from "../components/home/Home";

//unusual router
// import Login from "../components/form/loginForm/Login";
// , log_in

export default function Router() {
  return (
    <Switch>
      <Route exact path={home} component={Home} />
      {/* <Route exact path={log_in} component={Login} /> */}
    </Switch>
  );
}
