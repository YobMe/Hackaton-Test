import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./features";


export const store = configureStore({
  reducer: {
    category: categoryReducer
  },
});
