import { Route, Switch } from "react-router-dom";
import { home, log_in, register, confirm } from "./routes";
import Home from "../components/home/Home";
import Login from "../components/form/loginForm/Login";
import Register from "../components/form/registerForm/Register";
import Confirm from "../components/form/confirmCode/Confirm";
import { ContextFormProvider } from "../components/form/ContextForm";

export default function Router() {
  return (
    <Switch>
      <Route exact path={home} component={Home} />
      <ContextFormProvider>
        <Route exact path={log_in} component={Login} />
        <Route exact path={register} component={Register} />
        <Route exact path={confirm} component={Confirm} />
      </ContextFormProvider>
    </Switch>
  );
}
