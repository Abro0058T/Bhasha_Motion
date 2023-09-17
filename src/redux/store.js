import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/AuthSlice";

export default configureStore({
  reducer: {
    auth:authReducer,
  },
});
