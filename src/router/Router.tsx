import { useEffect, useState } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import {
  home,
  log_in,
  register,
  confirm,
  user,
  learn,
  learnLesson,
  story,
  store,
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
import { setFirstAuth, setImages } from "../redux/userInfo/userActions";
import instance from "../service/AppService";
import {
  setCountCoin,
  setCountCrown,
  setCurrentProgress,
  setProgressStory,
  setAuthClientID,
} from "../redux/userInfo/userActions";
import Store from "../components/store/Store";



interface stateProp {
  profile?: any;
  setFirthAuthHandler: (p: boolean) => void;
  nameLesson: string;
  catalog: any;
  clientID: any;

  restoreCoinHandler: (p: number) => void;
  restoreCrownHandler: (p: number) => void;
  restoreCurrentProgressHandler: (p: {}) => void;
  restoreCurrentProgressStoryHandler: (p: any) => void;
  restoreCurrentImagesHandler: (images: string[]) => void;
  restoreClientID: (p: any) => void;
}

function Router({
  profile,
  nameLesson,
  catalog,
  clientID,
  restoreClientID,
  restoreCoinHandler,
  restoreCrownHandler,
  restoreCurrentProgressHandler,
  restoreCurrentProgressStoryHandler,
  restoreCurrentImagesHandler,
}: stateProp) {
 const [isAuth, setAuth] = useState(false);
 const location = useLocation();

 useEffect(() => {
   if (profile.clientID !== "" && isAuth === false ) {
     instance.check_login(profile.clientID).then((data) => {
       data !== undefined && setAuth(true);
       restoreClientID(data.clientID);
       restoreCoinHandler(Number(data.coin));
       restoreCrownHandler(Number(data.crown));
       restoreCurrentProgressStoryHandler(data.progressStory);
       restoreCurrentImagesHandler(data.images);
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
        {isAuth &&(
              <>
                {!nameLesson && <Redirect to={learn} />}
                <LearnNavPanel profile={profile} pathname={location.pathname} />
                <Route exact path={learn} component={Learn} />
                <Route exact path={learnLesson} component={Lesson} />
                <Route exact path={story} component={Story} />
                <Route
                  path={`${user}/${profile.clientID}`}
                  component={Profile}
                />
                <Route exact path={store} component={Store} />
              </>
            )}
      </ContextFormProvider>
    </Switch>
  );
}

const mapStateToProps = (state: any) => ({
  profile: state.profile,
  nameLesson: state.lesson.name,
  clientID: state.profile.clientID,
  catalog: state.lesson.catalog,
});

const mapDispatchToProps = {
  setFirthAuthHandler: setFirstAuth,
  restoreClientID: setAuthClientID,
  restoreCoinHandler: setCountCoin,
  restoreCrownHandler: setCountCrown,
  restoreCurrentProgressHandler: setCurrentProgress,
  restoreCurrentProgressStoryHandler: setProgressStory,
  restoreCurrentImagesHandler: setImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
