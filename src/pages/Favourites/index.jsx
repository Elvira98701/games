import { useDispatch, useSelector } from "react-redux";
import styles from "./Favourites.module.scss";
import GameCard from "@components/GameCard";
import { clearItems, toggleItem } from "@redux/favourites/slice";
import FavouritesEmpty from "@components/FavouritesEmpty";
import Button from "@components/Button";

const Favourites = () => {
  const dispatch = useDispatch();
  const { favourites } = useSelector((state) => state.favourites);

  const onAddFavorites = (obj) => {
    dispatch(toggleItem(obj));
  };
  return (
    <main className={styles.favourites}>
      <section className={`${styles.favouritesInner} container`}>
        <h1 className={styles.favouritesTitle}>Favourites</h1>
        <div className={styles.favouritesWrapper}>
          <div className={styles.favouritesList}>
            {favourites.length === 0 ? (
              <FavouritesEmpty />
            ) : (
              favourites.map((item) => (
                <GameCard
                  key={item.id}
                  {...item}
                  onClick={() => onAddFavorites(item)}
                />
              ))
            )}
          </div>
        </div>
        {favourites.length > 0 && (
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
