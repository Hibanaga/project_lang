const initialState: any = {
  currentTheme: "",
  isOpen: false,
};

const actions = (state = initialState, { payload, type }: any) => {
  switch (type) {
    case "toggleStoryWindow":
      return { ...state, isOpen: !payload };
    case "setNewCurrentTheme":
      return { ...state, currentTheme: payload };
    default:
      throw new Error();
  }
};

export { initialState, actions };
