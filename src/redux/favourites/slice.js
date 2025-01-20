import { createSlice } from "@reduxjs/toolkit";

const getFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem("favourites"));
  } catch (error) {
    console.warn(error.message);
    return null;
  }
};

const initialState = getFromLocalStorage() ?? { favouritesList: [] };

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    toggleItem(state, action) {
      const existingIndex = state.favouritesList.findIndex(
        (obj) => obj.id === action.payload.id
      );

      if (existingIndex === -1) {
        state.favouritesList.push(action.payload);
      } else {
        state.favouritesList = state.favouritesList.filter(
          (obj) => obj.id !== action.payload.id
        );
      }
    },
    clearItems(state) {
      state.favouritesList = [];
    },
  },
});

export const { toggleItem, clearItems } = favouritesSlice.actions;
export default favouritesSlice.reducer;
