import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPlatforms = createAsyncThunk(
  "platforms/fetchPlatforms",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://api.rawg.io/api/platforms?key=${import.meta.env.VITE_API_KEY}`
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
    platformsFetchStatus: "loading",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPlatforms.pending, (state) => {
      state.platformsFetchStatus = "loading";
    });

    builder.addCase(fetchPlatforms.fulfilled, (state, action) => {
      state.platformsFetchStatus = "success";
      state.platformsList = action.payload.results;
    });

    builder.addCase(fetchPlatforms.rejected, (state) => {
      state.platformsFetchStatus = "error";
    });
  },
});

export default platformsSlice.reducer;
