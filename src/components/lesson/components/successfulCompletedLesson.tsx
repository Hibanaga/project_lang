import { withTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { learn } from "../../../router/routes";
import { SubTitleSearchWord, TitleQuestion } from "../styles/styled-lesson";

interface stateProp {
  onSubmitLessonHandler: (p: any) => void;
  t: (prop:string)=> string
}

 function successfulCompletedLesson({ onSubmitLessonHandler, t }: stateProp) {
   return (
     <div className="wrapperSuccesfulCompletedLesson">
       <TitleQuestion className="titleSuccesfullMessage">
         {t("resultLesson.congratsMessage")}
       </TitleQuestion>

       <SubTitleSearchWord className="subTitleSuccesfullMessage">
         {t("resultLesson.descriptionCongrats")}
       </SubTitleSearchWord>

       <NavLink
         to={learn}
         onClick={onSubmitLessonHandler}
         className="routeReturnToMain"
       >
         {t("resultLesson.submitFinishCongrats")}
       </NavLink>
     </div>
   );
 }


export default withTranslation()(successfulCompletedLesson);
