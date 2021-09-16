const initialState: any = {
  login: ``,
  password: ``,
  nickname: ``,
};

const actions = (state = initialState, { payload, type }: any) => {
  switch (type) {
    case "change_login":
      return { ...state, login: payload };
    case "change_password":
      return { ...state, password: payload };
    case "change_nickname":
      return { ...state, nickname: "" };
    default:
      throw new Error();
  }
};

export { initialState, actions };
