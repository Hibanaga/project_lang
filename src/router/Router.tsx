import { useEffect, useState } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { home, log_in, register, confirm, profile_user, learn } from "./routes";
import Home from "../components/home/Home";
import Login from "../components/auth/loginForm/Login";
import Register from "../components/auth/registerForm/Register";
import Confirm from "../components/auth/confirmCode/Confirm";
import { ContextFormProvider } from "../components/auth/ContextForm";
import Profile from "../components/profile/Profile";
import { connect } from "react-redux";
import Learn from "../components/learn/Learn";
import NavPanel from "../components/learn/components/navPanel";
import { setCountCoin, setCountCrown } from "../redux/userInfo/userActions";
import ProfileInfo from "../components/learn/components/profileInfo";

interface stateProp {
  profile?: any;
  restoreCoinHandler: (p: number) => void;
  restoreCrownHandler: (p: number) => void;
}

function Router({
  profile,
  restoreCoinHandler,
  restoreCrownHandler,
}: stateProp) {
  const [isAuth, setAuth] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (profile.clientID !== "" && isAuth === false) {
      //upload curr clientID
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

      //upload user start
      fetch("/profileStats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ clientID: profile.clientID }),
      })
        .then((res) => res.json())
        .then((data) => {
          restoreCoinHandler(data.coin);
          restoreCrownHandler(data.crown);
        });
    }
  }, [isAuth, profile.clientID, restoreCoinHandler, restoreCrownHandler]);

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
            <NavPanel pathname={location.pathname} />
            <ProfileInfo />
            <Route exact path={learn} component={Learn} />
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

const mapDispatchToProps = {
  restoreCoinHandler: setCountCoin,
  restoreCrownHandler: setCountCrown,
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
