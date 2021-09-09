const initialState: any = {
  login: ``,
  password: ``,
};

const actions = (state = initialState, { payload, type }: any) => {
  switch (type) {
    case "change_login":
      return { ...state, login: payload };
    case "change_password":
      return { ...state, password: payload };
    default:
      throw new Error();
  }
};

export { initialState, actions };
