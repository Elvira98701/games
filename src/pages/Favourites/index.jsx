import { useDispatch, useSelector } from "react-redux";

import { clearItems, toggleItem } from "@redux/favourites/slice";

import GameCard from "@components/GameCard";
import FavouritesEmpty from "@components/FavouritesEmpty";
import Button from "@components/Button";

import styles from "./Favourites.module.scss";

const Favourites = () => {
  const dispatch = useDispatch();
  const { favouritesList } = useSelector((state) => state.favourites);

  const handleAddFavorites = (obj) => {
    dispatch(toggleItem(obj));
  };

  return (
    <main className={styles.favourites}>
      <section className={`${styles.favouritesInner} container`}>
        <h1 className={styles.favouritesTitle}>
          <span>Favourites</span>{" "}
          <svg
            className={styles.favouritesIcon}
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              fill="#e0e1dd"
              d="M38.2 34.6L64 32l-25.8-2.6l16.4-20l-20 16.4L32 0l-2.6 25.8l-20-16.4l16.4 20L0 32l25.8 2.6l-16.4 20l20-16.4L32 64l2.6-25.8l20 16.4z"
            ></path>
          </svg>
        </h1>
        <div className={styles.favouritesWrapper}>
          <div className={styles.favouritesList}>
            {favouritesList.length === 0 ? (
              <FavouritesEmpty />
            ) : (
              favouritesList.map((item) => (
                <GameCard
                  key={item.id}
                  {...item}
                  onClick={() => handleAddFavorites(item)}
                />
              ))
            )}
          </div>
        </div>
        {favouritesList.length > 0 && (
          <div className={styles.favouritesButtons}>
            <Button onClick={() => dispatch(clearItems())} active={true}>
              Delete all
            </Button>
          </div>
        )}
      </section>
    </main>
  );
};

export default Favourites;
