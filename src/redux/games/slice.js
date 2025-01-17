import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL, STATUSES } from "@utils/constants";
import axios from "axios";

export const fetchGames = createAsyncThunk(
  "games/fetchGames",
  async (params) => {
    const { pageSize, genreId, platformId, sort, searchValue, currentPage } =
      params;

    const response = await axios.get(
      `${BASE_URL}/games?discover=true&key=${import.meta.env.VITE_API_KEY}`,
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
  }
);

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    gamesList: [],
    count: 0,
    gamesFetchStatus: STATUSES.IDLE,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.gamesFetchStatus = STATUSES.LOADING;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.gamesFetchStatus = STATUSES.SUCCESS;
        state.gamesList = action.payload.results;
        state.count = action.payload.count;
      })
      .addCase(fetchGames.rejected, (state) => {
        state.gamesFetchStatus = STATUSES.ERROR;
      });
  },
});

export default gamesSlice.reducer;
