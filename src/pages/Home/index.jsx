import Slider from "@components/Slider";
import styles from "./Home.module.scss";
import { useSelector } from "react-redux";
import TopGames from "@components/TopGames";

const Home = () => {
  const { slides } = useSelector((state) => state.slider);

  return (
    <main className={styles.home}>
      <Slider slides={slides.slice(9)} />
      <TopGames slides={[...slides.slice(0, 7), ...slides.slice(8)]} />
    </main>
  );
};

export default Home;
