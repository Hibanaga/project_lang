import { useEffect, useState } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import {
  home,
  log_in,
  register,
  confirm,
  profile_user,
  learn,
  learnLesson,
  story,
} from "./routes";
import Profile from "../components/profile/Profile";
import Home from "../components/home/Home";
import Login from "../components/auth/loginForm/Login";
import Register from "../components/auth/registerForm/Register";
import Confirm from "../components/auth/confirmCode/Confirm";
import Learn from "../components/learn/Learn";
import LearnNavPanel from "../components/learn/components/learnNavPanel";
import Lesson from "../components/lesson/Lesson";
import Story from "../components/story/Story";
import { ContextFormProvider } from "../components/auth/ContextForm";
import { connect } from "react-redux";
import { setFirstAuth } from "../redux/userInfo/userActions";

import {
  setCountCoin,
  setCountCrown,
  setCurrentProgress,
  setProgressStory,
} from "../redux/userInfo/userActions";

interface stateProp {
  profile?: any;
  setFirthAuthHandler: (p: boolean) => void;
  nameLesson: string;
  catalog: any;

  restoreCoinHandler: (p: number) => void;
  restoreCrownHandler: (p: number) => void;
  restoreCurrentProgressHandler: (p: {}) => void;
  restoreCurrentProgressStoryHandler: (p: any) => void;
}

function Router({
  profile,
  nameLesson,
  catalog,
  restoreCoinHandler,
  restoreCrownHandler,
  restoreCurrentProgressHandler,
  restoreCurrentProgressStoryHandler,
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
        )
        .then(() => {
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
              restoreCurrentProgressStoryHandler(data.progressStory);
            });
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            {nameLesson && catalog.length === 0 && <Redirect to={learn} />}

            <LearnNavPanel profile={profile} pathname={location.pathname} />

            <Route exact path={learn} component={Learn} />
            <Route exact path={learnLesson} component={Lesson} />
            <Route exact path={story} component={Story} />
            <Route exact path={profile_user} component={Profile} />
          </>
        )}
      </ContextFormProvider>
    </Switch>
  );
}

const mapStateToProps = (state: any) => ({
  profile: state.profile,
  nameLesson: state.lesson.name,
  catalog: state.lesson.catalog,
});

const mapDispatchToProps = {
  setFirthAuthHandler: setFirstAuth,

  restoreCoinHandler: setCountCoin,
  restoreCrownHandler: setCountCrown,
  restoreCurrentProgressHandler: setCurrentProgress,
  restoreCurrentProgressStoryHandler: setProgressStory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
