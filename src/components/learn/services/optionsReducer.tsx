const initialState: any = {
  introduction: false,
};

interface actionsProp {
  type: string;
  payload: boolean;
}

const actions = (state = initialState, { type, payload }: actionsProp) => {
  switch (type) {
    case "toggleIntroduction":
      return { ...state, introduction: !payload };

    default:
      throw new Error();
  }
};

export { initialState, actions };
