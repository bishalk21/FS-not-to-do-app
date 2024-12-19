import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ThemeState = "light" | "dark";

const initialState: { theme: ThemeState } = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemeState>) => {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
