import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./Reducer";


export const store = configureStore({
  reducer: {
    todo: todoReducer
  }
})
