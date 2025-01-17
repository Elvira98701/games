import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL, STATUSES } from "@utils/constants";
import axios from "axios";

export const fetchDevelopers = createAsyncThunk(
  "developers/fetchDevelopers",
  async () => {
    const response = await axios.get(
      `${BASE_URL}/developers?key=${import.meta.env.VITE_API_KEY}`
    );
    return response.data;
  }
);

const developersSlice = createSlice({
  name: "developers",
  initialState: {
    developersList: [],
    developersFetchStatus: STATUSES.IDLE,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDevelopers.pending, (state) => {
        state.developersFetchStatus = STATUSES.LOADING;
      })
      .addCase(fetchDevelopers.fulfilled, (state, action) => {
        state.developersFetchStatus = STATUSES.SUCCESS;
        state.developersList = action.payload.results;
      })
      .addCase(fetchDevelopers.rejected, (state) => {
        state.developersFetchStatus = STATUSES.ERROR;
      });
  },
});

export default developersSlice.reducer;
