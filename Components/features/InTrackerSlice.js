import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  TrackerCount:0,
  country:"Bangladesh",
  data:[],
  Locationcountry:"Bangladesh",
  time:null,
  name:"",
  email:"",
  ID:null
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
    },
    setUser:(state,action)=>{
      state.name=action.payload.name;
      state.email=action.payload.email;
      state.ID=action.payload.ID;
    }

  }
});

export const {setCount,setCountry,setData,resetCount,setLocationCountry,setTime,setUser} = InTrackerSlice.actions
export const selectCount=state=>state.Tracker.TrackerCount
export const selectCountry=state=>state.Tracker.country
export const selectData=state=>state.Tracker.data
export const selectLocationCountry=state=>state.Tracker.Locationcountry
export const selectTime=state=>state.Tracker.time
export const selectName=state=>state.Tracker.name
export const selectEmail=state=>state.Tracker.email
export const selectID=state=>state.Tracker.ID
export default InTrackerSlice.reducer