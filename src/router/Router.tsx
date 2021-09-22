import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { home, log_in, register, confirm, profile_user, learn } from "./routes";
import Home from "../components/home/Home";
import Login from "../components/form/loginForm/Login";
import Register from "../components/form/registerForm/Register";
import Confirm from "../components/form/confirmCode/Confirm";
import { ContextFormProvider } from "../components/form/ContextForm";
import Profile from "../components/profile/Profile";
import { connect } from "react-redux";
import Main from "../components/main/Main";

function Router({ profile }: any) {
  const [isAuth, setAuth] = useState(false);

  console.log(setAuth);

  return (
    <Switch>
      <Route exact path={home} component={Home} />

      <ContextFormProvider>
        <Route exact path={log_in} component={Login} />
        <Route exact path={register} component={Register} />
        <Route exact path={confirm} component={Confirm} />

        {isAuth && (
          <>
            <Route exact path={learn} component={Main} />
            <Route exact path={profile_user} component={Profile} />
          </>
        )}
      </ContextFormProvider>
    </Switch>
  );
}

const mapStateToProps = (state: any) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, null)(Router);
