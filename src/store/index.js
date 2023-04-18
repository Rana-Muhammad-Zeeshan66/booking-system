import { configureStore } from "@reduxjs/toolkit";
import { allToursReducer } from "./slices/allTourSlice";
import { myToursReducer } from "./slices/myTourSlice";
import { addTour, removeTour } from "./slices/myTourSlice";
import { addSearch, searchReducer } from "./slices/searchTourSlice";

const store = configureStore({
  reducer: {
    allTours: allToursReducer,
    myTours: myToursReducer,
    search: searchReducer,
  },
});

export { store, addTour, removeTour, addSearch, searchReducer };
