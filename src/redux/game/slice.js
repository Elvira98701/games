import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL, STATUSES } from "@utils/constants";
import axios from "axios";

export const fetchGame = createAsyncThunk(
  "game/fetchGame",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/games/${id}?key=${import.meta.env.VITE_API_KEY}`
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
    gameFetchStatus: STATUSES.LOADING,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGame.pending, (state) => {
      state.gameFetchStatus = STATUSES.LOADING;
    });

    builder.addCase(fetchGame.fulfilled, (state, action) => {
      state.gameFetchStatus = STATUSES.SUCCESS;
      state.game = action.payload;
    });

    builder.addCase(fetchGame.rejected, (state) => {
      state.gameFetchStatus = STATUSES.ERROR;
    });
  },
});

export default gameSlice.reducer;
