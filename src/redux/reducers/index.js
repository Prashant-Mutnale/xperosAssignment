import { combineReducers } from "redux";
import redditReducer from "./redditReducer";

export default combineReducers({
  redditPosts: redditReducer
});
