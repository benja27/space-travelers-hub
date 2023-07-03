import { createSlice } from "@reduxjs/toolkit";

const defaultresults = {
  open : false
}

const chatSlice = createSlice({
  name: "chatslice",
  defaultresults,
  reducers : {

  }
})

export default chatSlice.reducer
