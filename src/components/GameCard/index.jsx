import { Link } from "react-router-dom";
import styles from "./GameCard.module.scss";
import { useSelector } from "react-redux";

const GameCard = ({
  id,
  name,
  rating,
  background_image,
  released,
  onClick,
}) => {
  const { favourites } = useSelector((state) => state.favourites);

  return (
    <article className={styles.card}>
      <img
        className={styles.cardImage}
        src={background_image}
        alt="name"
        loading="lazy"
        width={300}
        height={300}
      />
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
      <svg
        className={styles.cardIcon}
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill={
          favourites.findIndex((obj) => obj.id === id) !== -1
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
