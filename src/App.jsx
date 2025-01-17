import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSlider } from "@redux/slider/slice";
import { fetchGenres } from "@redux/genres/slice";
import { fetchPlatforms } from "@redux/platforms/slice";
import { fetchDevelopers } from "@redux/developers/slice";
import { fetchGames } from "@redux/games/slice";

import Home from "@pages/Home";
import Game from "@pages/Game";
import AllGamesPage from "@pages/AllGamesPage";
import Favourites from "@pages/Favourites";

import Header from "@components/Header";
import Footer from "@components/Footer";

import ScrollToTop from "@utils/scrollToTop";
import { STATUSES } from "@utils/constants";

import "@styles/index.scss";

const App = () => {
  const dispatch = useDispatch();
  const { slidesFetchStatus } = useSelector((state) => state.slider);
  const { genresFetchStatus } = useSelector((state) => state.genres);
  const { platformsFetchStatus } = useSelector((state) => state.platforms);
  const { developersFetchStatus } = useSelector((state) => state.developers);
  const { genreId, platformId, sort, searchValue, currentPage, pageSize } =
    useSelector((state) => state.filter);

  useEffect(() => {
    if (slidesFetchStatus === STATUSES.IDLE) {
      dispatch(fetchSlider());
    }

    if (genresFetchStatus === STATUSES.IDLE) {
      dispatch(fetchGenres());
    }

    if (platformsFetchStatus === STATUSES.IDLE) {
      dispatch(fetchPlatforms());
    }

    if (developersFetchStatus === STATUSES.IDLE) {
      dispatch(fetchDevelopers());
    }
  }, [
    developersFetchStatus,
    dispatch,
    genresFetchStatus,
    platformsFetchStatus,
    slidesFetchStatus,
  ]);

  useEffect(() => {
    dispatch(
      fetchGames({
        pageSize,
        genreId,
        platformId,
        sort,
        searchValue,
        currentPage,
      })
    );
  }, [genreId, platformId, sort, searchValue, currentPage, pageSize, dispatch]);

  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/games" element={<AllGamesPage />} />
        <Route path="/game/:id" element={<Game />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
