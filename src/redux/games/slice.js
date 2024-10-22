import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGames = createAsyncThunk(
  "games/fetchGames",
  async (params, thunkAPI) => {
    const { pageSize, genreId, platformId, sort } = params;
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
            ...(sort && { ordering: sort }),
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
    items: [],
    status: "loading",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGames.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(fetchGames.fulfilled, (state, action) => {
      state.status = "success";
      state.items = action.payload.results;
    });

    builder.addCase(fetchGames.rejected, (state) => {
      state.status = "error";
    });
  },
});

export default gamesSlice.reducer;
