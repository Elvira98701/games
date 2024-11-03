import { useDispatch, useSelector } from "react-redux";
import { setGenreId, setPage } from "@redux/filter/slice";

import Button from "@components/Button";

import styles from "./Genres.module.scss";

const Genres = () => {
  const dispatch = useDispatch();
  const { genreId } = useSelector((state) => state.filter);
  const { genresList } = useSelector((state) => state.genres);

  const handleChangeGenre = (event, id) => {
    event.stopPropagation();
    dispatch(setGenreId(id));
    dispatch(setPage(1));
  };

  return (
    <div className={styles.genres}>
      <h3>Genres</h3>
      <div className={styles.genresBlock}>
        <div className={styles.genre}>
          <div className={`${styles.image} ${styles.imageAll}`}></div>
          <Button
            onClick={(event) => handleChangeGenre(event, 0)}
            active={genreId === 0}
          >
            All genres
          </Button>
        </div>
        {genresList.slice(0, 11).map(({ id, name, image_background }) => (
          <div className={styles.genre} key={id}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${image_background})` }}
            ></div>
            <Button
              onClick={(event) => handleChangeGenre(event, id)}
              active={genreId === id}
            >
              {name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;
