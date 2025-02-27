import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAnimation from "@hooks/useAnimation";

import { toggleItem } from "@redux/favourites/slice";

import styles from "./TopGames.module.scss";

const TopGames = ({ slides = [] }) => {
  const { favouritesList } = useSelector((state) => state.favourites);
  const dispatch = useDispatch();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slidesVisibleCount, setSlidesVisibleCount] = useState(1);
  const titleRef = useRef(null);
  const isTitleAnimated = useAnimation(titleRef);

  const updateSlidesVisibleCount = () => {
    if (window.innerWidth <= 600) {
      setSlidesVisibleCount(1);
    } else if (window.innerWidth <= 950) {
      setSlidesVisibleCount(2);
    } else if (window.innerWidth <= 1200) {
      setSlidesVisibleCount(3);
    } else {
      setSlidesVisibleCount(5);
    }
  };

  useEffect(() => {
    updateSlidesVisibleCount();
    window.addEventListener("resize", updateSlidesVisibleCount);
    return () => {
      window.removeEventListener("resize", updateSlidesVisibleCount);
    };
  }, []);

  const offsetTranslateX = -(currentSlideIndex * (100 / slidesVisibleCount));

  return (
    <section className={styles.topGames}>
      <div className="container">
        <h2
          className={`${styles.topGamesTitle} ${
            isTitleAnimated ? styles.topGamesTitleAnimated : ""
          }`}
          ref={titleRef}
        >
          Top games
        </h2>
        <div className={styles.sliderContainer}>
          <div
            className={styles.slidesWrapper}
            style={{
              transform: `translateX(${offsetTranslateX}%)`,
            }}
          >
            {slides.map((item) => (
              <article className={styles.slideItem} key={item.id}>
                <img
                  className={styles.slideImage}
                  src={item.background_image}
                  alt={item.name}
                />
                <div className={styles.slideContent}>
                  <Link to={`/game/${item.id}`}>
                    <h3 className={styles.slideTitle}>{item.name}</h3>
                  </Link>
                </div>
                <div className={styles.slideFavourites}>
                  <svg
                    className={styles.slideFavouritesIcon}
                    onClick={() => dispatch(toggleItem(item))}
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill={
                      favouritesList.findIndex((obj) => obj.id === item.id) !==
                      -1
                        ? "#d90429"
                        : "#e0e1dd"
                    }
                    viewBox="0 0 256 256"
                  >
                    <path d="M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z"></path>
                  </svg>
                </div>
              </article>
            ))}
          </div>
          <button
            className={styles.prevSlideButton}
            onClick={() =>
              setCurrentSlideIndex(Math.max(currentSlideIndex - 1, 0))
            }
            disabled={currentSlideIndex === 0}
            type="button"
          ></button>
          <button
            className={styles.nextSlideButton}
            onClick={() =>
              setCurrentSlideIndex(
                Math.min(
                  currentSlideIndex + 1,
                  slides.length - slidesVisibleCount
                )
              )
            }
            disabled={currentSlideIndex === slides.length - slidesVisibleCount}
            type="button"
          ></button>
        </div>
      </div>
    </section>
  );
};

export default TopGames;
