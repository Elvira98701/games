import { useSelector } from "react-redux";

import Slider from "@components/Slider";
import TopGames from "@components/TopGames";
import About from "@components/About";
import TopDevelopers from "@components/TopDevelopers";
import BrowseAllGames from "@components/BrowseAllGames";
import Preloader from "@components/Preloader";

import styles from "./Home.module.scss";

const Home = () => {
  const { slides, status } = useSelector((state) => state.slider);

  return (
    <>
      {status === "loading" ? (
        <Preloader />
      ) : (
        <main className={styles.home}>
          <Slider slides={slides.slice(9)} />
          <About />
          <TopGames slides={[...slides.slice(0, 7), ...slides.slice(8)]} />
          <TopDevelopers />
          <BrowseAllGames />
        </main>
      )}
    </>
  );
};

export default Home;
