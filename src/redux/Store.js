import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./slices/counterSlice";
export const Store = configureStore({
  reducer: {
    counterReducer: counterSlice,
  },
});