import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  TrackerCount:0,
  country:"Bangladesh",
  data:[],
  Locationcountry:"Bangladesh",
  time:null
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
    setTime:(state,action)=>{
      state.time=action.payload;
    },
    resetCount:(state,action)=>{
      state.TrackerCount=0;
    },
    setLocationCountry:(state,action)=>{
      state.Locationcountry=action.payload;
    }
  }
});

export const {setCount,setCountry,setData,resetCount,setLocationCountry,setTime} = InTrackerSlice.actions
export const selectCount=state=>state.Tracker.TrackerCount
export const selectCountry=state=>state.Tracker.country
export const selectData=state=>state.Tracker.data
export const selectLocationCountry=state=>state.Tracker.Locationcountry
export const selectTime=state=>state.Tracker.time
export default InTrackerSlice.reducer