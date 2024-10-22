import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    favourites: [],
  },
  reducers: {
    toggleItem(state, action) {
      const existingIndex = state.favourites.findIndex(
        (obj) => obj.id === action.payload.id
      );

      if (existingIndex === -1) {
        state.favourites.push(action.payload);
      } else {
        state.favourites = state.favourites.filter(
          (obj) => obj.id !== action.payload.id
        );
      }
    },
    clearItems(state) {
      state.favourites = [];
    },
  },
});

export const { toggleItem, clearItems } = favouritesSlice.actions;
export default favouritesSlice.reducer;
