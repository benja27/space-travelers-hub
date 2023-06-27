import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    missions: [],
    isLoading: false,
    error: null
}

const missionSlice = createSlice({
    name: 'missions',
    initialState,

}
)