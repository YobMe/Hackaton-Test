import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

const slice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action?.payload;
    },
  },
});

export const { setCategories} = slice.actions;
export default slice.reducer;