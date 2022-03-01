import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  TrackerCount:0,
  scrollvalue:0
}
const InTrackerSlice = createSlice({
  name: "InTrackerSlice",
  initialState,
  reducers: {
    setCount:(state,action)=>{
      state.TrackerCount=action.payload;
    },
    setScrollValue:(state,action)=>{
      state.scrollvalue=action.payload;
    },
  }
});

export const {setCount,setScrollValue} = InTrackerSlice.actions
export const selectCount=state=>state.Tracker.TrackerCount
export const selectScrollValue=state=>state.Tracker.scrollvalue

export default InTrackerSlice.reducer