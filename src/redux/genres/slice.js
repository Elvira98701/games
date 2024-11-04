import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL, STATUSES } from "@utils/constants";
import axios from "axios";

export const fetchGenres = createAsyncThunk(
  "genres/fetchGneres",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/genres?key=${import.meta.env.VITE_API_KEY}`
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
    genresList: [],
    genresFetchStatus: STATUSES.LOADING,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGenres.pending, (state) => {
      state.genresFetchStatus = STATUSES.LOADING;
    });

    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      state.genresFetchStatus = STATUSES.SUCCES;
      state.genresList = action.payload.results;
    });

    builder.addCase(fetchGenres.rejected, (state) => {
      state.genresFetchStatus = STATUSES.ERROR;
    });
  },
});

export default genresSlice.reducer;
