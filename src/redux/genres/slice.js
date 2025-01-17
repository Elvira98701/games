import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL, STATUSES } from "@utils/constants";
import axios from "axios";

export const fetchGenres = createAsyncThunk("genres/fetchGneres", async () => {
  const response = await axios.get(
    `${BASE_URL}/genres?key=${import.meta.env.VITE_API_KEY}`
  );
  return response.data;
});

const genresSlice = createSlice({
  name: "genres",
  initialState: {
    genresList: [],
    genresFetchStatus: STATUSES.IDLE,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.genresFetchStatus = STATUSES.LOADING;
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.genresFetchStatus = STATUSES.SUCCESS;
        state.genresList = action.payload.results;
      })
      .addCase(fetchGenres.rejected, (state) => {
        state.genresFetchStatus = STATUSES.ERROR;
      });
  },
});

export default genresSlice.reducer;
