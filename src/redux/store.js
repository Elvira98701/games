import { configureStore } from "@reduxjs/toolkit";

import gamesReducer from "./games/slice";
import sliderReducer from "./slider/slice";
import genresReducer from "./genres/slice";
import platformsReducer from "./platforms/slice";
import favouritesReducer from "./favourites/slice";
import filterReducer from "./filter/slice";
import gameReducer from "./game/slice";
import developersReducer from "./developers/slice";
import moviesReducer from "./movies/slice";
import { localStorageMiddleware } from "./middleware/localStorageMiddleware";

export const store = configureStore({
  reducer: {
    games: gamesReducer,
    game: gameReducer,
    slider: sliderReducer,
    genres: genresReducer,
    platforms: platformsReducer,
    favourites: favouritesReducer,
    filter: filterReducer,
    developers: developersReducer,
    movies: moviesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
