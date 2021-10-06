import { Wrapper } from "../../../styles/styled-comp";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { NavLink } from "react-router-dom";
import { learn } from "../../../router/routes";

export default function actionReturnBack() {
  return (
    <Wrapper className="wrapperActionsRouter">
      <NavLink to={learn} className="js-link__returnLearn">
        <CloseRoundedIcon />
      </NavLink>

      <div className="wrapperProgressBar">
        <div className="progressBar"></div>
      </div>
    </Wrapper>
  );
}
