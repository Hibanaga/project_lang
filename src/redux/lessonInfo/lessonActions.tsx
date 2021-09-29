import { SET_LESSONTYPE } from "./lessonActionTypes";

const setLessonTypeName = (lessonType: string) => ({
  type: SET_LESSONTYPE,
  payload: lessonType,
});

export { setLessonTypeName };
