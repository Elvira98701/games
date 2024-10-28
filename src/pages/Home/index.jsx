import Slider from "@components/Slider";
import styles from "./Home.module.scss";
import { useSelector } from "react-redux";
import TopGames from "@components/TopGames";
import About from "@components/About";
import TopDevelopers from "@components/TopDevelopers";
import BrowseAllGames from "@components/BrowseAllGames";

const Home = () => {
  const { slides } = useSelector((state) => state.slider);

  return (
    <main className={styles.home}>
      <Slider slides={slides.slice(9)} />
      <About />
      <TopGames slides={[...slides.slice(0, 7), ...slides.slice(8)]} />
      <TopDevelopers />
      <BrowseAllGames />
    </main>
  );
};

export default Home;
