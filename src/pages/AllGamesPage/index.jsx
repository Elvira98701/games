import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import GameCard from "@components/GameCard";
import Genres from "@components/Genres";
import Button from "@components/Button";
import Platforms from "@components/Plarforms";
import Search from "@components/Search";

import { fetchGames } from "@redux/games/slice";
import { setGenreId, setPlatformId, setSort } from "@redux/filter/slice";
import { toggleItem } from "@redux/favourites/slice";

import styles from "./AllGamesPage.module.scss";
import Sort from "@components/Sort";

const AllGamesPage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.games);
  const { genreId, platformId, sort } = useSelector((state) => state.filter);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onChangeGenre = (id) => {
    dispatch(setGenreId(id));
  };

  const onChangePlatform = (id) => {
    dispatch(setPlatformId(id));
  };

  const onChangeSort = (value) => {
    dispatch(setSort(value));
  };

  const onAddFavorites = (obj) => {
    dispatch(toggleItem(obj));
  };

  useEffect(() => {
    const pageSize = 12;
    dispatch(fetchGames({ pageSize, genreId, platformId, sort }));
  }, [genreId, platformId, sort]);

  useEffect(() => {
    if (isOpenModal) {
      document.documentElement.classList.add("popup-opened");
    } else {
      document.documentElement.classList.remove("popup-opened");
    }
  }, [isOpenModal]);

  return (
    <main className={styles.games}>
      <section className={`${styles.gamesContainer} container`}>
        <div className={styles.gamesBanner}>
          <h1 className={styles.gamesTitle}>All games</h1>
        </div>
        <div className={styles.gamesHeader}>
          {/* <Sort value={sort} onChangeSort={onChangeSort} /> */}
          <Search />
        </div>

        <div className={styles.gamesInner}>
          <div className={styles.gamesFilter}>
            <div className={styles.gamesButtons}>
              <Button onClick={() => setIsOpenModal(!isOpenModal)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#fff"
                  viewBox="0 0 256 256"
                >
                  <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
                </svg>
              </Button>
            </div>
            <div
              className={styles.gamesModal}
              style={{ transform: isOpenModal ? "translateY(0)" : "" }}
            >
              <Genres value={genreId} onChangeGenre={onChangeGenre} />
              <Platforms
                value={platformId}
                onChangePlatform={onChangePlatform}
              />
            </div>
          </div>
          <section className={styles.gamesContent}>
            {items.map((item) => (
              <GameCard
                key={item.id}
                {...item}
                onClick={() => onAddFavorites(item)}
              />
            ))}
          </section>
        </div>
      </section>
    </main>
  );
};

export default AllGamesPage;
