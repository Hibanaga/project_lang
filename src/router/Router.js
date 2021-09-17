import { Route, Switch } from "react-router-dom";
import { home, log_in, register } from "./routes";
import Home from "../components/home/Home";
import Login from "../components/form/loginForm/Login";
import Register from "../components/form/registerForm/Register";

import { useState } from "react";
//i18n translation
import { defaultLang } from "../translation/assets/lang";
import { useLang } from "../components/home/hooks/customHooks";

export default function Router() {
  //set new lang
  const [selectedLang, setSelectedLang] = useState(defaultLang);

  const currLang = useLang(selectedLang);

  //fucntion set new lang
  const updateLangHandler = (lang) => {
    setSelectedLang(lang);
  };

  return (
    <Switch>
      <Route
        exact
        path={home}
        component={() => (
          <Home currLang={currLang} onUpdateLangHandler={updateLangHandler} />
        )}
      />
      <Route
        exact
        path={log_in}
        component={() => <Login userLang={currLang} />}
      />
      <Route
        exact
        path={register}
        component={() => <Register userLang={currLang} />}
      />
    </Switch>
  );
}
