import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGames = createAsyncThunk(
  "games/fetchGames",
  async (params, thunkAPI) => {
    const { pageSize, genreId, platformId, sort, searchValue, currentPage } =
      params;
    try {
      const response = await axios.get(
        `https://api.rawg.io/api/games?discover=true&key=${
          import.meta.env.VITE_API_KEY
        }`,
        {
          params: {
            page_size: pageSize,
            ...(genreId !== 0 && { genres: genreId }),
            ...(platformId !== 0 && { platforms: platformId }),
            ordering: sort,
            ...(searchValue !== "" && { search: searchValue }),
            page: currentPage,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    gamesList: [],
    count: 0,
    gamesFetchStatus: "loading",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGames.pending, (state) => {
      state.gamesFetchStatus = "loading";
    });

    builder.addCase(fetchGames.fulfilled, (state, action) => {
      state.gamesFetchStatus = "success";
      state.gamesList = action.payload.results;
      state.count = action.payload.count;
    });

    builder.addCase(fetchGames.rejected, (state) => {
      state.gamesFetchStatus = "error";
    });
  },
});

export default gamesSlice.reducer;
