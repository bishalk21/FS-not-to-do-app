import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers-actions/todo/todoSlice";
import themeReducer from "./reducers-actions/theme/themeSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
