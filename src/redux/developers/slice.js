import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL, STATUSES } from "@utils/constants";
import axios from "axios";

export const fetchDevelopers = createAsyncThunk(
  "developers/fetchDevelopers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/developers?key=${import.meta.env.VITE_API_KEY}`
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
    developersFetchStatus: STATUSES.LOADING,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDevelopers.pending, (state) => {
      state.developersFetchStatus = STATUSES.LOADING;
    });

    builder.addCase(fetchDevelopers.fulfilled, (state, action) => {
      state.developersFetchStatus = STATUSES.SUCCES;
      state.developersList = action.payload.results;
    });

    builder.addCase(fetchDevelopers.rejected, (state) => {
      state.developersFetchStatus = STATUSES.ERROR;
    });
  },
});

export default developersSlice.reducer;
