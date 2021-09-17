import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { NavLink } from "react-router-dom";
import { log_in, home, register } from "../../../router/routes";
// import { removeUnusedPartLocation } from "../../../utils/validationHelpers";

interface stateProp {
  pathLocation?: string;
  userLang: any;
}

export default function actionsRedirect({ userLang, pathLocation }: stateProp) {
  return (
    <div className="wrapper__actionsRedirect">
      <NavLink to={home} className="js-btn__redirect js-btn__redirectToHome">
        <CloseRoundedIcon />
      </NavLink>

      <NavLink
        to={pathLocation === log_in ? register : log_in}
        className="js-btn__redirect js-btn__redirectToRegister"
      >
        {
          (pathLocation = log_in
            ? userLang.loginForm.registerBtn
            : userLang.login)
        }
      </NavLink>
    </div>
  );
}
