import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDevelopers = createAsyncThunk(
  "developers/fetchDevelopers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://api.rawg.io/api/developers?key=${import.meta.env.VITE_API_KEY}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const developersSlice = createSlice({
  name: "developers",
  initialState: {
    developersList: [],
    developersFetchStatus: "loading",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDevelopers.pending, (state) => {
      state.developersFetchStatus = "loading";
    });

    builder.addCase(fetchDevelopers.fulfilled, (state, action) => {
      state.developersFetchStatus = "success";
      state.developersList = action.payload.results;
    });

    builder.addCase(fetchDevelopers.rejected, (state) => {
      state.developersFetchStatus = "error";
    });
  },
});

export default developersSlice.reducer;
