import { withTranslation } from "react-i18next";
import { TextAreaForm } from "../styles/styled-lesson";

interface stateProp {
  typedText: string;
  onChangeTextAreaHandler: (p: any) => void;
  t: (prop:any) => string;
}

function formInputTypeC({ typedText, onChangeTextAreaHandler, t }: stateProp) {
  return (
    <TextAreaForm
      value={typedText}
      onChange={onChangeTextAreaHandler}
      placeholder={t("Lesson.titleTypes.titleTypeC")}
    />
  );
}


export default withTranslation()(formInputTypeC);
