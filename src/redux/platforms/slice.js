import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL, STATUSES } from "@utils/constants";
import axios from "axios";

export const fetchPlatforms = createAsyncThunk(
  "platforms/fetchPlatforms",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/platforms?key=${import.meta.env.VITE_API_KEY}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const platformsSlice = createSlice({
  name: "platforms",
  initialState: {
    platformsList: [],
    platformsFetchStatus: STATUSES.LOADING,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPlatforms.pending, (state) => {
      state.platformsFetchStatus = STATUSES.LOADING;
    });

    builder.addCase(fetchPlatforms.fulfilled, (state, action) => {
      state.platformsFetchStatus = STATUSES.SUCCES;
      state.platformsList = action.payload.results;
    });

    builder.addCase(fetchPlatforms.rejected, (state) => {
      state.platformsFetchStatus = STATUSES.ERROR;
    });
  },
});

export default platformsSlice.reducer;
