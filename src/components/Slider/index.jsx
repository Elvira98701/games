import { Link } from "react-router-dom";
import styles from "./Slider.module.scss";
import { useEffect, useRef, useState } from "react";
import { toggleItem } from "@redux/favourites/slice";
import Button from "@components/Button";
import { useDispatch, useSelector } from "react-redux";

const Slider = ({ slides = [] }) => {
  const dispatch = useDispatch();
  const { favourites } = useSelector((state) => state.favourites);
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
    } else if (window.innerWidth <= 1500) {
      setSlidesVisibleCount(5);
    } else {
      setSlidesVisibleCount(7);
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
    <section className={styles.sliderContainer}>
      <div className={styles.backgroundSlider}>
        {slides.map(({ id, background_image }, index) => (
          <div
            key={id}
            className={
              index === currentSlideIndex ? styles.backgroundSliderActive : ""
            }
            style={{
              backgroundImage: `url(${background_image})`,
            }}
          />
        ))}
      </div>
      <div className={styles.slideContent}>
        {slides.map((item, index) => (
          <div
            className={
              index === currentSlideIndex ? styles.slideContentActive : ""
            }
            key={item.id}
          >
            <Link to={`/game/${item.id}`}>
              <h2 className={styles.slideContentTitle}>{item.name}</h2>
            </Link>
            <div className={styles.slideContentInfo}>
              <div>
                <span>Play time:</span>
                <span>{item.playtime} hours</span>
              </div>
              <div>
                <span>Rating:</span>
                <span>{item.rating}</span>
              </div>
            </div>
            <Button accent={true} onClick={() => dispatch(toggleItem(item))}>
              {favourites.findIndex((obj) => obj.id === item.id) !== -1
                ? "Delete from favorites"
                : "Add to favorites"}
            </Button>
          </div>
        ))}
      </div>
      <div
        className={styles.slidesWrapper}
        style={{
          transform: `translateX(${offsetTranslateX}%)`,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map(({ id, background_image }, index) => (
          <article
            onClick={() => setCurrentSlideIndex(index)}
            className={styles.slideItem}
            key={id}
            style={{
              transform: index === currentSlideIndex ? "scale(1.2)" : "",
              zIndex: index === currentSlideIndex ? "1" : "",
            }}
          >
            <img
              className={
                currentSlideIndex === index
                  ? `${styles.slideImage} ${styles.isActive}`
                  : styles.slideImage
              }
              src={background_image}
              alt={`Slide ${index}`}
              style={{
                width: "100%",
              }}
            />
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
    </section>
  );
};

export default Slider;
