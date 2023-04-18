import { createSlice } from "@reduxjs/toolkit";

import toursData from "../../data/allTours.json";

const myTours = createSlice({
  name: "my-tours",
  initialState: toursData.myTours,
  reducers: {
    addTour: (state, action) => {
      state.push(action.payload);
    },
    removeTour: (state, action) => {
      const indexOfTour = state
        .map((tour) => tour.tourId)
        .indexOf(action.payload);

      state.splice(indexOfTour, 1);
    },
  },
});

export const { addTour, removeTour } = myTours.actions;
export const myToursReducer = myTours.reducer;
