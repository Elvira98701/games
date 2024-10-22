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
    status: "loading",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGame.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(fetchGame.fulfilled, (state, action) => {
      state.status = "success";
      state.game = action.payload;
    });

    builder.addCase(fetchGame.rejected, (state) => {
      state.status = "error";
    });
  },
});

export default gameSlice.reducer;
