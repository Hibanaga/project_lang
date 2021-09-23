import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { NavLink } from "react-router-dom";
import { log_in, home, register } from "../../../router/routes";
// import { removeUnusedPartLocation } from "../../../utils/validationHelpers";

import { withTranslation } from "react-i18next";

interface stateProp {
  pathLocation?: string;
  t: (p: string) => object;
}

function actionsRedirect({ t, pathLocation }: stateProp) {
  return (
    <div className="wrapper__actionsRedirect">
      <NavLink to={home} className="js-btn__redirect js-btn__redirectToHome">
        <CloseRoundedIcon />
      </NavLink>

      <NavLink
        to={pathLocation === log_in ? register : log_in}
        className="js-btn__redirect js-btn__redirectToRegister"
      >
        {pathLocation === log_in
          ? t("form.loginForm.registerBtn")
          : t("form.login")}
      </NavLink>
    </div>
  );
}

export default withTranslation()(actionsRedirect);
