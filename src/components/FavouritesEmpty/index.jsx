import { Link } from "react-router-dom";
import styles from "./FavouritesEmpty.module.scss";

const FavouritesEmpty = () => {
  return (
    <div className={styles.favouritesEmpty}>
      <svg
        className={styles.favouritesEmptyIcon}
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.08,64a8,8,0,1,1-13.84,8c-7.47-12.91-19.21-20-33.08-20s-25.61,7.1-33.08,20a8,8,0,1,1-13.84-8c10.29-17.79,27.39-28,46.92-28S164.63,154.2,174.92,172Z"></path>
      </svg>
      <p>
        No games found. Add{" "}
        <Link className={styles.favouritesEmptyLink} to="/games">
          games
        </Link>
        .
      </p>
    </div>
  );
};

export default FavouritesEmpty;