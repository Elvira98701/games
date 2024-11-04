import { useSelector } from "react-redux";

import Slider from "@components/Slider";
import TopGames from "@components/TopGames";
import About from "@components/About";
import TopDevelopers from "@components/TopDevelopers";
import BrowseAllGames from "@components/BrowseAllGames";
import Preloader from "@components/Preloader";

import { STATUSES } from "@utils/constants";

import styles from "./Home.module.scss";

const Home = () => {
  const { slidesList, slidesFetchStatus } = useSelector(
    (state) => state.slider
  );

  return (
    <>
      {slidesFetchStatus === STATUSES.LOADING ? (
        <Preloader />
      ) : (
        <main className={styles.home}>
          <Slider slides={slidesList.slice(9)} />
          <About />
          <TopGames
            slides={[...slidesList.slice(0, 7), ...slidesList.slice(8)]}
          />
          <TopDevelopers />
          <BrowseAllGames />
        </main>
      )}
    </>
  );
};

export default Home;
