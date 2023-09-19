import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/AuthSlice";
import videoReducer from "./features/VideoSlice";

export default configureStore({
  reducer: {
    auth:authReducer,
    video:videoReducer
  },
});
