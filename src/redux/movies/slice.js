import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL, STATUSES } from "@utils/constants";
import axios from "axios";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (id) => {
    const response = await axios.get(
      `${BASE_URL}/games/${id}/movies?key=${import.meta.env.VITE_API_KEY}`
    );
    return response.data;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    moviesList: [],
    moviesFetchStatus: STATUSES.IDLE,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.moviesFetchStatus = STATUSES.LOADING;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.moviesFetchStatus = STATUSES.SUCCESS;
        state.moviesList = action.payload.results;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.moviesFetchStatus = STATUSES.ERROR;
      });
  },
});

export default moviesSlice.reducer;
