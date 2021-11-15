const initialState: any = {
  currentTheme: "",
  isOpen: false,
  isVisibleModal: false,
  lessonObj: [],
  falsyAnswerObj: [],
};

const actions = (state = initialState, { payload, type }: any) => {
  switch (type) {
    case "toggleStoryWindow":
      return { ...state, isOpen: !payload };
    case "setNewCurrentTheme":
      return { ...state, currentTheme: payload };
    case "toggleVisibleModal":
      return { ...state, isVisibleModal: !payload };
    case "updateLessonObj":
      return { ...state, lessonObj: [...state.lessonObj, payload] };
    case "resetLessonObj":
      return { ...state, lessonObj: payload };
    case "updateFalsyAnswerObj":
      return { ...state, falsyAnswerObj: [...state.falsyAnswerObj, payload] };
    case "resetFalsyAnswerObj":
      return { ...state, falsyAnswerObj: payload };
    default:
      throw new Error();
  }
};

export { initialState, actions };
