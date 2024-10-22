import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  genreId: 0,
  platformId: 0,
  sort: false,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setGenreId(state, action) {
      state.genreId = action.payload;
    },
    setPlatformId(state, action) {
      state.platformId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const { setGenreId, setPlatformId, setSort, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
