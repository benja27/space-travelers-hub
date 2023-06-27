import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  rockets : [],
  isLoading : true
}

const rocketSlice = createSlice({
  name: "rocket slice",
  initialState,
  // extraReducers : (builder) => {
    
  // }
})

let url = "https://api.spacexdata.com/v3/rockets";
export const fetchRockets = createAsyncThunk('fetch rockets',  

  async ()=>{
    try {
      const res = await axios(url)
      console.log(res)
    } catch (error) {
      
    }
  }
)





















export default rocketSlice.reducer