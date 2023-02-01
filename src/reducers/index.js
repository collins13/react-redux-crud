import { combineReducers } from "@reduxjs/toolkit";
import PostReducer from "./PostReducer";

export default combineReducers({
  posts: PostReducer,
});
