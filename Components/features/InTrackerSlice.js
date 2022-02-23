import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  TrackerCount=0
}
const InTrackerSlice = createSlice({
  name: "InTrackerSlice",
  initialState,
  reducers: {
    setCount:(state,action)=>{
      state.TrackerCount=action.payload;
    },
  }
});

export const {setCount} = InTrackerSlice.actions
export const selectCount=state=>state.Tracker.TrackerCount
export default InTrackerSlice.reducer