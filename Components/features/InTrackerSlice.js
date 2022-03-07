import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  TrackerCount:0,
  country:"Bangladesh",
  data:[],

}
const InTrackerSlice = createSlice({
  name: "InTrackerSlice",
  initialState,
  reducers: {
    setCount:(state,action)=>{
      state.TrackerCount+=1;
    },
    setCountry:(state,action)=>{
      state.country=action.payload;
    },
    setData:(state,action)=>{
      state.data.push(action.payload);
    },
    resetCount:(state,action)=>{
      state.TrackerCount=0;
    }
  }
});

export const {setCount,setCountry,setData,resetCount} = InTrackerSlice.actions
export const selectCount=state=>state.Tracker.TrackerCount
export const selectCountry=state=>state.Tracker.country
export const selectData=state=>state.Tracker.data
export default InTrackerSlice.reducer