import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL, STATUSES } from "@utils/constants";
import axios from "axios";

export const fetchSlider = createAsyncThunk("slider/fetchSlider", async () => {
  const response = await axios.get(
    `${BASE_URL}/games?key=${import.meta.env.VITE_API_KEY}`,
    {
      params: {
        page_size: 18,
        page: 1,
        platforms: 187,
      },
    }
  );
  return response.data;
});

const sliderSlice = createSlice({
  name: "slider",
  initialState: {
    slidesList: [],
    slidesFetchStatus: STATUSES.IDLE,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSlider.pending, (state) => {
        state.slidesFetchStatus = STATUSES.LOADING;
      })
      .addCase(fetchSlider.fulfilled, (state, action) => {
        state.slidesFetchStatus = STATUSES.SUCCESS;
        state.slidesList = action.payload.results;
      })
      .addCase(fetchSlider.rejected, (state) => {
        state.slidesFetchStatus = STATUSES.ERROR;
      });
  },
});

export default sliderSlice.reducer;
