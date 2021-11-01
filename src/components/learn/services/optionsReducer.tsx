const initialState: any = {
  introduction: false,
  chapter_1: false,
  chapter_2: false,
};

interface actionsProp {
  type: string;
  payload: boolean;
}

const actions = (state = initialState, { type, payload }: actionsProp) => {
  switch (type) {
    case "toggleIntroduction":
      return { ...state, introduction: !payload };
    case "toggleChapter_1":
      return { ...state, chapter_1: !payload };
    case "toggleChapter_2":
      return { ...state, chapter_2: !payload };
    default:
      throw new Error();
  }
};

export { initialState, actions };
