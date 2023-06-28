import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// general config

const initialState = {
  rockets: [],
  isLoading: true,
};

const rocketSlice = createSlice({
  name: 'rocket slice',
  initialState,
  reducers: {
    reserve: (state, action) => {
      const found = state.rockets.find((ele) => ele.id === action.payload);
      found.reserved = true;
    },
    cancelReserve: (state, action) => {
      const found = state.rockets.find((ele) => ele.id === action.payload);
      found.reserved = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.rockets = action.payload;
        state.isLoading = false;
      });
  },
});
export const { reserve, cancelReserve } = rocketSlice.actions;

// extra reducers

const url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk(
  'fetch rockets',

  async () => {
    try {
      const res = await axios(url);

      const rocketsInfo = [];

      res.data.forEach((item) => {
        const piece = {
          id: item.id,
          name: item.rocket_name,
          type: item.rocket_type,
          img: item.flickr_images[0],
          description: item.description,
          reserved: false,

        };
        rocketsInfo.push(piece);
      });

      // console.log(rocketsInfo)

      return rocketsInfo;
    } catch (error) {

    }
  },
);

export default rocketSlice.reducer;
