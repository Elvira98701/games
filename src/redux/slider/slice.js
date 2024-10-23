import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSlider = createAsyncThunk(
  "slider/fetchSlider",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}`,
        {
          params: {
            page_size: 18,
            page: 1,
            platforms: 187,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    slides: [],
    status: "loading",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSlider.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(fetchSlider.fulfilled, (state, action) => {
      state.status = "success";
      state.slides = action.payload.results;
    });

    builder.addCase(fetchSlider.rejected, (state) => {
      state.status = "error";
    });
  },
});

export default sliderSlice.reducer;
