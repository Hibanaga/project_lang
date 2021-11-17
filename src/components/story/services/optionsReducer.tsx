const initialState: any = {
  currentTheme: "",
  titleStory: "",
  isOpen: false,
  isVisibleModal: false,
  lessonObj: [],
  dialogResponse: [],
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
    case "setTitleStory":
      return { ...state, titleStory: payload };
    case "setDialogResponse":
      return { ...state, dialogResponse: payload };
    default:
      throw new Error();
  }
};

export { initialState, actions };
