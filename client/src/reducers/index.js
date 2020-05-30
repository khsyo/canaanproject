import { combineReducers } from "redux";
import auth from "./auth";
import profile from "./profile";
import employer from "./employer";
import job from "./job";

export default combineReducers({
  auth,
  profile,
  employer,
  job,
});
