import { combineReducers } from "redux";
import ProfileReducer from "./ProfileReducer";

export default combineReducers({
  user: ProfileReducer,
});
