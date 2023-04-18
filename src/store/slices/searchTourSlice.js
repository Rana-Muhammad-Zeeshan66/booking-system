import { createSlice } from "@reduxjs/toolkit";

const searchTours = createSlice({
  name: "all-tours",
  initialState: [],
  reducers: {
    addSearch: (state, action) => {
      state = [...action.payload];

      return state;
    },
  },
});

export const { addSearch } = searchTours.actions;
export const searchReducer = searchTours.reducer;
