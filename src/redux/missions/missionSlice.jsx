import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const missionsUrl = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
  isLoading: false,
  error: null,
};

export const fetchMissions = createAsyncThunk('fetchMissions', async () => {
  try {
    const response = await fetch(missionsUrl);
    const res = await response.json();
    const missionsArray = [];
    res.forEach((item) => {
      const missionItem = {
        ...item,
        member: false,
      };
      missionsArray.push(missionItem);
    });
    return missionsArray;
  } catch (error) {
    return error;
  }
});

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const mission = state.missions.find(
        (item) => item.mission_id === action.payload,
      );
      mission.member = true;
    },
    leaveMission: (state, action) => {
      const mission = state.missions.find(
        (item) => item.mission_id === action.payload,
      );
      mission.member = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMissions.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(
        fetchMissions.fulfilled,
        (state, action) => ({
          ...state,
          missions: action.payload,
          isLoading: false,
        }),

      )
      .addCase(
        fetchMissions.rejected,
        (state, action) => ({
          ...state,
          isLoading: false,
          error: action.error.message,
        }),

      );
  },
});
export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
