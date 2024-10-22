import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import Button from "@components/Button";

import styles from "./Genres.module.scss";

const Genres = ({ value, onChangeGenre }) => {
  const { items } = useSelector((state) => state.genres);
  const [showMore, setShowMore] = useState(false);
  const blockRef = useRef();

  useEffect(() => {
    if (showMore) {
      blockRef.current.style.height = `${blockRef.current.scrollHeight}px`;
    } else {
      blockRef.current.style.height = "";
    }
  }, [showMore]);

  return (
    <div className={styles.genres}>
      <h3>Genres</h3>
      <div className={styles.genresBlock} ref={blockRef}>
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
      <Button onClick={() => setShowMore(!showMore)} accent={true}>
        {showMore ? "Hide" : "Show all"}
      </Button>
    </div>
  );
};

export default Genres;
