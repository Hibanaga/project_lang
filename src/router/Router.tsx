import { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { home, log_in, register, confirm, profile_user, learn } from "./routes";
import Home from "../components/home/Home";
import Login from "../components/form/loginForm/Login";
import Register from "../components/form/registerForm/Register";
import Confirm from "../components/form/confirmCode/Confirm";
import { ContextFormProvider } from "../components/form/ContextForm";
import Profile from "../components/profile/Profile";
import { connect } from "react-redux";
import Main from "../components/main/Main";

interface stateProp {
  profile?: any;
}

function Router({ profile }: stateProp) {
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (profile.clientID !== "" && isAuth === false) {
      fetch("/check_login", {
        method: "POST",
        signal: signal,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ clientID: profile.clientID }),
      })
        .then((res) => res.json())
        .then((data) =>
          data.message === "success" ? setAuth(true) : setAuth(false)
        );
    }
  }, [isAuth, profile.clientID]);

  return (
    <Switch>
      <Route exact path={home} component={Home} />

      <ContextFormProvider>
        <Route exact path={log_in} component={Login} />
        <Route exact path={register} component={Register} />
        <Route exact path={confirm} component={Confirm} />

        {profile.isFirstAuth && <Redirect to={learn} />}

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
