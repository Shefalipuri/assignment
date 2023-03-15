import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../component/pages/postSlice";
export const store = configureStore({
  reducer: {
    post: postReducer,
  },
});
