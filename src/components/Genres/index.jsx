import { useSelector } from "react-redux";
import Button from "@components/Button";

import styles from "./Genres.module.scss";

const Genres = ({ value, onChangeGenre }) => {
  const { items } = useSelector((state) => state.genres);

  return (
    <div className={styles.genres}>
      <h3>Genres</h3>
      <div className={styles.genresBlock}>
        <div className={styles.genre}>
          <div className={`${styles.image} ${styles.imageAll}`}></div>
          <Button onClick={() => onChangeGenre(0)} active={value === 0}>
            All genres
          </Button>
        </div>
        {items.slice(0, 11).map(({ id, name, image_background }) => (
          <div className={styles.genre} key={id}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${image_background})` }}
            ></div>
            <Button onClick={() => onChangeGenre(id)} active={value === id}>
              {name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;
