import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGenres = createAsyncThunk(
  "genres/fetchGneres",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://api.rawg.io/api/genres?key=${import.meta.env.VITE_API_KEY}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const genresSlice = createSlice({
  name: "genres",
  initialState: {
    items: [],
    status: "loading",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGenres.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      state.status = "success";
      state.items = action.payload.results;
    });

    builder.addCase(fetchGenres.rejected, (state) => {
      state.status = "error";
    });
  },
});

export default genresSlice.reducer;
