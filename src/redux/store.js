import { configureStore } from "@reduxjs/toolkit";
import gamesSlice from "./games/slice";
import sliderSlice from "./slider/slice";
import genresSlice from "./genres/slice";
import platformsSlice from "./platforms/slice";
import favouritesSlice from "./favourites/slice";
import filterSlice from "./filter/slice";
import gameSlice from "./game/slice";

export const store = configureStore({
  reducer: {
    games: gamesSlice,
    game: gameSlice,
    slider: sliderSlice,
    genres: genresSlice,
    platforms: platformsSlice,
    favourites: favouritesSlice,
    filter: filterSlice,
  },
});
