import { SET_LESSONTYPE, SET_LESSONCONTENT } from "./lessonActionTypes";

const setLessonTypeName = (lessonType: string) => ({
  type: SET_LESSONTYPE,
  payload: lessonType,
});

const setLessonContent = (
  lessonContent: {
    type: string;
    questionDefaultLang: string;
    answer: string;
    typeQuestion: string;
    varianAnswer: any;
  }[]
) => ({
  type: SET_LESSONCONTENT,
  payload: lessonContent,
});

export { setLessonTypeName, setLessonContent };
