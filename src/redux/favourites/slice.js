import { createSlice } from "@reduxjs/toolkit";

const getFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem("favourites"));
  } catch (error) {
    console.warn(error.message);
    return null;
  }
};

const initialState = {
  favourites: getFromLocalStorage() ?? [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
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

      localStorage.setItem("favourites", JSON.stringify(state.favourites));
    },
    clearItems(state) {
      state.favourites = [];
      localStorage.removeItem("favourites");
    },
  },
});

export const { toggleItem, clearItems } = favouritesSlice.actions;
export default favouritesSlice.reducer;
