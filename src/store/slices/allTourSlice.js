import { createSlice } from "@reduxjs/toolkit";

import toursData from "../../data/allTours.json";

const allTours = createSlice({
  name: "all-tours",
  initialState: toursData.allTours,
});

export const allToursReducer = allTours.reducer;
