const initialState: any = {
  email: ``,
  password: ``,
  nickname: ``,
};

const actions = (state = initialState, { payload, type }: any) => {
  switch (type) {
    case "change_email":
      return { ...state, email: payload };
    case "change_password":
      return { ...state, password: payload };
    case "change_nickname":
      return { ...state, nickname: payload };
    default:
      throw new Error();
  }
};

export { initialState, actions };
