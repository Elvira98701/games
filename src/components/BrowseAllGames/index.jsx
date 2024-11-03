import { Link } from "react-router-dom";
import { useRef } from "react";
import useAnimation from "@hooks/useAnimation";

import styles from "./BrowseAllGames.module.scss";

const BrowseAllGames = () => {
  const containerRef = useRef(null);
  const isAnimated = useAnimation(containerRef);

  return (
    <section className={styles.browseAllGames}>
      <div className={`${styles.browseAllGamesInner} container`}>
        <p className={styles.browseAllGamesDescription} ref={containerRef}>
          It&apos;s{" "}
          <span
            className={`${styles.browseAllGamesAccent} ${
              isAnimated ? styles.isAnimated : ""
            }`}
          >
            easy
          </span>{" "}
          and fast to{" "}
          <span
            className={`${styles.browseAllGamesAccent} ${
              isAnimated ? styles.isAnimated : ""
            }`}
          >
            find
          </span>{" "}
          the right{" "}
          <span
            className={`${styles.browseAllGamesAccent} ${
              isAnimated ? styles.isAnimated : ""
            }`}
          >
            game
          </span>
          , read the description and see the{" "}
          <span
            className={`${styles.browseAllGamesAccent} ${
              isAnimated ? styles.isAnimated : ""
            }`}
          >
            ratings
          </span>
          .
        </p>
        <Link className={styles.browseAllGamesLink} to="/games">
          See all games
        </Link>
      </div>
    </section>
  );
};

export default BrowseAllGames;
