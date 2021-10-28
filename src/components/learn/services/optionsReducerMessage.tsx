const initialState: any = {
  isOpenMessageWindow: false,
  currentTheme: "",
};

interface actionsProp {
  type: string;
  payload: boolean;
}

const actions = (state = initialState, { type, payload }: actionsProp) => {
  switch (type) {
    case "toggleMessageWindow":
      return { ...state, isOpenMessageWindow: !payload };
    case "setNewCurrentTheme":
      return { ...state, currentTheme: payload };
    default:
      throw new Error();
  }
};

export { initialState, actions };
