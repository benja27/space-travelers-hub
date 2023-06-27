import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    missions: [],
    isLoading: false,
    error: null
}

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