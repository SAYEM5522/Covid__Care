import { configureStore } from '@reduxjs/toolkit';
import InTrackerReducer from "../features/InTrackerSlice";
export default configureStore({
  reducer: {
    Tracker:InTrackerReducer,
  },
});