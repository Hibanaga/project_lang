import { SET_LESSONTYPE } from "./lessonActionTypes";

interface stateProp {
  type: string;
  payload: object;
}

const initialState = {
  name: "",
  catalog: [],
};

export default function lessonReducer(
  state = initialState,
  { type, payload }: stateProp
) {
  switch (type) {
    case SET_LESSONTYPE:
      return { ...state, name: payload };

    default:
      return state;
  }
}
