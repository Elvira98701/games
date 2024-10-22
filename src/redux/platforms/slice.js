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
    items: [],
    status: "loading",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPlatforms.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(fetchPlatforms.fulfilled, (state, action) => {
      state.status = "success";
      state.items = action.payload.results;
    });

    builder.addCase(fetchPlatforms.rejected, (state) => {
      state.status = "error";
    });
  },
});

export default platformsSlice.reducer;
