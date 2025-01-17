import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL, STATUSES } from "@utils/constants";
import axios from "axios";

export const fetchPlatforms = createAsyncThunk(
  "platforms/fetchPlatforms",
  async () => {
    const response = await axios.get(
      `${BASE_URL}/platforms?key=${import.meta.env.VITE_API_KEY}`
    );
    return response.data;
  }
);

const platformsSlice = createSlice({
  name: "platforms",
  initialState: {
    platformsList: [],
    platformsFetchStatus: STATUSES.IDLE,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlatforms.pending, (state) => {
        state.platformsFetchStatus = STATUSES.LOADING;
      })
      .addCase(fetchPlatforms.fulfilled, (state, action) => {
        state.platformsFetchStatus = STATUSES.SUCCESS;
        state.platformsList = action.payload.results;
      })
      .addCase(fetchPlatforms.rejected, (state) => {
        state.platformsFetchStatus = STATUSES.ERROR;
      });
  },
});

export default platformsSlice.reducer;
