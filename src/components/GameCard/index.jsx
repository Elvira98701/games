import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./GameCard.module.scss";

const GameCard = ({
  id,
  name,
  rating,
  background_image,
  released,
  onClick,
}) => {
  const { favouritesList } = useSelector((state) => state.favourites);

  return (
    <article
      className={styles.card}
      style={{ backgroundImage: `url(${background_image})` }}
    >
      <div className={styles.cardContent}>
        <div className={styles.cardInfo}>
          <span
            className={styles.cardRating}
            style={{
              color:
                rating <= 2
                  ? "#d90429"
                  : rating > 2 && rating < 4
                  ? "#edff21"
                  : "#6dc849",
            }}
          >
            {rating}
          </span>
          <span>{released}</span>
        </div>
        <Link to={`/game/${id}`}>
          <h3 className={styles.cardTitle}>{name}</h3>
        </Link>
      </div>
      <svg
        className={styles.cardIcon}
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill={
          favouritesList.findIndex((obj) => obj.id === id) !== -1
            ? "#d90429"
            : "#e0e1dd"
        }
        viewBox="0 0 256 256"
      >
        <path d="M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z"></path>
      </svg>
    </article>
  );
};

export default GameCard;
