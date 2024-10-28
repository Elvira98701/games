import { Link } from "react-router-dom";
import styles from "./BrowseAllGames.module.scss";

const BrowseAllGames = () => {
  return (
    <section className={styles.browseAllGames}>
      <div className={`${styles.browseAllGamesInner} container`}>
        <p className={styles.browseAllGamesDescription}>
          It&apos;s <span className={styles.browseAllGamesAccent}>easy</span>{" "}
          and fast to <span className={styles.browseAllGamesAccent}>find</span>{" "}
          the right <span className={styles.browseAllGamesAccent}>game</span>,
          read the description and see the{" "}
          <span className={styles.browseAllGamesAccent}>ratings</span>.
        </p>
        <Link className={styles.browseAllGamesLink} to="/games">
          See games
        </Link>
      </div>
    </section>
  );
};

export default BrowseAllGames;
