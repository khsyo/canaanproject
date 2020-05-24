import { combineReducers } from "redux";
import auth from "./auth";
import profile from "./profile";
import employer from "./employer";

export default combineReducers({
  auth,
  profile,
  employer,
});
