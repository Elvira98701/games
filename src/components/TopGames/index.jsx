import { useEffect, useRef, useState } from "react";
import styles from "./TopGames.module.scss";

const TopGames = ({ slides = [] }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slidesVisibleCount, setSlidesVisibleCount] = useState(1);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;

    if (deltaX > swipeThreshold) {
      updateCurrentSlide(currentSlideIndex + 1);
    } else if (deltaX < -swipeThreshold) {
      updateCurrentSlide(currentSlideIndex - 1);
    }
  };

  const updateCurrentSlide = (index) => {
    if (index < 0) {
      setCurrentSlideIndex(slides.length - 1);
    } else if (index > slides.length - 1) {
      setCurrentSlideIndex(0);
    } else {
      setCurrentSlideIndex(index);
    }
  };

  const offsetTranslateX = -(currentSlideIndex * (100 / slidesVisibleCount));
  return (
    <section className={styles.topGames}>
      <div className="container">
        <h2 className={styles.topGamesTitle}>Top games</h2>
        <div className={styles.sliderContainer}>
          <div
            className={styles.slidesWrapper}
            style={{
              transform: `translateX(${offsetTranslateX}%)`,
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {slides.map(({ id, background_image, name }, index) => (
              <article
                onClick={() => setCurrentSlideIndex(index)}
                className={styles.slideItem}
                key={id}
              >
                <img
                  className={
                    currentSlideIndex === index
                      ? `${styles.slideImage} ${styles.isActive}`
                      : styles.slideImage
                  }
                  src={background_image}
                  alt={`Slide ${index}`}
                />
                <div className={styles.slideContent}>
                  <h3 className={styles.slideTitle}>{name}</h3>
                </div>
              </article>
            ))}
          </div>
          <button
            className={styles.prevSlideButton}
            onClick={() => updateCurrentSlide(currentSlideIndex - 1)}
            type="button"
          ></button>
          <button
            className={styles.nextSlideButton}
            onClick={() => updateCurrentSlide(currentSlideIndex + 1)}
            type="button"
          ></button>
        </div>
      </div>
    </section>
  );
};

export default TopGames;
