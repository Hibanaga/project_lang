import { combineReducers, createStore, applyMiddleware } from "redux";
import userReducer from "./userInfo/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import lessonReducer from "./lessonInfo/lessonReducer";

const rootReducer = combineReducers({
  profile: userReducer,
  lesson: lessonReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
