const initialState: any = {
  email: ``,
  password: ``,
  nickname: ``,
};

const actions = (state = initialState, { payload, type }: any) => {
  switch (type) {
    case "change_email__login":
      return {
        ...state,
        login: {
          ...state.login,
          email: payload,
        },
      };
    case "change_password__login":
      return {
        ...state,
        login: {
          ...state.login,
          password: payload,
        },
      };
    case "change_nickname__register":
      return {
        ...state,
        register: {
          ...state.register,
          nickname: payload,
        },
      };
    case "change_email__register":
      return {
        ...state,
        register: {
          ...state.register,
          email: payload,
        },
      };
    case "change_password__register":
      return {
        ...state,
        register: {
          ...state.register,
          password: payload,
        },
      };
    default:
      throw new Error();
  }
};

export { initialState, actions };
