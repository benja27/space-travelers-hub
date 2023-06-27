import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const missionsUrl = 'https://api.spacexdata.com/v3/missions'

const initialState = {
    missions: [],
    isLoading: false,
    error: null
}

export const fetchMissions = createAsyncThunk('fetchMissions', async()=>{
    try{
        const response = await axios.get(missionsUrl)
        return response.data
    }catch(error){
        return error
    }
})

const missionSlice = createSlice({
    name: 'missions',
    initialState,
    reducers: {
        joinMission: (state, action)=>{
            const mission = state.missions.find((item)=>item.id === action.payload)
            mission.member = true 
        },
        leaveMission: (state, action)=>{
            const mission = state.missions.find((item)=>item.id === action.payload)
            mission.member = true 
        }
    }
}
)
export const {joinMission, leaveMission} = missionSlice.actions
export default missionSlice.reducer