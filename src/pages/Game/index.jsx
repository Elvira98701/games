import { Link, useParams } from "react-router-dom";
import styles from "./Game.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGame } from "@redux/game/slice";
import Preloader from "@components/Preloader";

const Game = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { game, status } = useSelector((state) => state.game);

  useEffect(() => {
    dispatch(fetchGame(id));
  }, [id]);

  return (
    <>
      {status === "loading" ? (
        <Preloader />
      ) : (
        <main
          className={styles.game}
          style={{ backgroundImage: `url(${game.background_image})` }}
        >
          <section className={`${styles.gameContainer} container`}>
            <div className={styles.gameContent}>
              <div className={styles.gameNav}>
                <Link className={styles.gameBack} to="/">
                  Home
                </Link>
                <span> / </span>
                <Link className={styles.gameBack} to="/games">
                  Games
                </Link>
                <span> / {game.name}</span>
              </div>
              <h1 className={styles.gameTitle}>{game.name}</h1>
              <div className={styles.gameInfo}>
                <div>
                  <span>Play time:</span>
                  <span>{game.playtime} hours</span>
                </div>
                <div>
                  <span>Rating:</span>
                  <span>{game.rating}</span>
                </div>
              </div>
              <p className={styles.gameDescription}>{game.description_raw}</p>
              <a
                className={styles.gameLink}
                href={game.website}
                target="_blank"
              >
                Visit the website
                <svg
                  className={styles.gameLinkIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,109.66-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,173.66,133.66Z"></path>
                </svg>
              </a>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default Game;
