import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers-actions/todo/todoSlice";
import themeReducer from "./reducers-actions/theme/themeSlice";
import { pokemonApi } from "@/services/pokemonQuery";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    theme: themeReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
