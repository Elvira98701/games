import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGame = createAsyncThunk(
  "game/fetchGame",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const gameSlice = createSlice({
  name: "game",
  initialState: {
    game: {},
    gameFetchStatus: "loading",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGame.pending, (state) => {
      state.gameFetchStatus = "loading";
    });

    builder.addCase(fetchGame.fulfilled, (state, action) => {
      state.gameFetchStatus = "success";
      state.game = action.payload;
    });

    builder.addCase(fetchGame.rejected, (state) => {
      state.gameFetchStatus = "error";
    });
  },
});

export default gameSlice.reducer;
