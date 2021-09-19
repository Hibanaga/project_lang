import { Route, Switch } from "react-router-dom";
import { home, log_in, register } from "./routes";
import Home from "../components/home/Home";
import Login from "../components/form/loginForm/Login";
import Register from "../components/form/registerForm/Register";

export default function Router() {
  return (
    <Switch>
      <Route exact path={home} component={Home} />
      <Route exact path={log_in} component={Login} />
      <Route exact path={register} component={Register} />{" "}
    </Switch>
  );
}
