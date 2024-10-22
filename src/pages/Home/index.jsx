import Slider from "@components/Slider";
import styles from "./Home.module.scss";
import { useSelector } from "react-redux";

const Home = () => {
  const { items } = useSelector((state) => state.slider);

  return (
    <main className={styles.home}>
      <Slider slides={items} />
    </main>
  );
};

export default Home;
