import { useDispatch, useSelector } from "react-redux";
import styles from "./Favourites.module.scss";
import GameCard from "@components/GameCard";
import { toggleItem } from "@redux/favourites/slice";

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
            {favourites.map((item) => (
              <GameCard
                key={item.id}
                {...item}
                onClick={() => onAddFavorites(item)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Favourites;
