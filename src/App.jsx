import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Home from "@pages/Home";
import Game from "@pages/Game";
import AllGamesPage from "@pages/AllGamesPage";
import Favourites from "@pages/Favourites";
import Header from "@components/Header";
import ScrollToTop from "@helpers/scrollToTop";

import { fetchSlider } from "@redux/slider/slice";
import { fetchGenres } from "@redux/genres/slice";
import { fetchPlatforms } from "@redux/platforms/slice";

import "@styles/index.scss";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSlider());
    dispatch(fetchGenres());
    dispatch(fetchPlatforms());
  }, [dispatch]);

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
    </div>
  );
};

export default App;
