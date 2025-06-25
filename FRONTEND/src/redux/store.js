import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import urlReducer from "./slices/urlSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    url: urlReducer,
  },
});

export default store;
