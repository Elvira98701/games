import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleItem } from "@redux/favourites/slice";

import GameCard from "@components/GameCard";
import Genres from "@components/Genres";
import Button from "@components/Button";
import Platforms from "@components/Plarforms";
import Search from "@components/Search";
import Sort from "@components/Sort";
import Pagination from "@components/Pagination";
import Skeleton from "@components/Skeleton";

import styles from "./AllGamesPage.module.scss";

const AllGamesPage = memo(function AllGamesPage() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.games);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleAddFavorites = (obj) => {
    dispatch(toggleItem(obj));
  };

  useEffect(() => {
    const closeModal = () => {
      setIsOpenModal(false);
    };
    document.addEventListener("click", closeModal);

    return () => document.removeEventListener("click", closeModal);
  }, []);

  return (
    <main className={styles.games}>
      <section className={`${styles.gamesContainer} container`}>
        <div className={styles.gamesBanner}>
          <h1 className={styles.gamesTitle}>All games</h1>
        </div>
        <div className={styles.gamesHeader}>
          <Sort />
          <div className={styles.gamesWrapper}>
            <Search />
            <div className={styles.gamesButtons}>
              <Button
                onClick={(event) => {
                  event.stopPropagation();
                  setIsOpenModal(!isOpenModal);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#e0e1dd"
                  viewBox="0 0 256 256"
                >
                  <path d="M176,80a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H184A8,8,0,0,1,176,80ZM40,88H144v16a8,8,0,0,0,16,0V56a8,8,0,0,0-16,0V72H40a8,8,0,0,0,0,16Zm176,80H120a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16ZM88,144a8,8,0,0,0-8,8v16H40a8,8,0,0,0,0,16H80v16a8,8,0,0,0,16,0V152A8,8,0,0,0,88,144Z"></path>
                </svg>
              </Button>
            </div>
          </div>
        </div>

        <div className={styles.gamesInner}>
          <div className={styles.gamesFilter}>
            <div
              className={styles.gamesModal}
              style={{
                transform: isOpenModal ? "translateY(0)" : "",
                opacity: isOpenModal ? 1 : "",
                pointerEvents: isOpenModal ? "all" : "",
              }}
            >
              <Genres />
              <Platforms />
            </div>
          </div>
          {status === "loading" ? (
            <Skeleton />
          ) : items.length > 0 ? (
            <section className={styles.gamesContent}>
              {items.map((item) => (
                <GameCard
                  key={item.id}
                  {...item}
                  onClick={() => handleAddFavorites(item)}
                />
              ))}
            </section>
          ) : (
            <div className={styles.gamesEmpty}>
              <svg
                className={styles.gamesEmptyIcon}
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.08,64a8,8,0,1,1-13.84,8c-7.47-12.91-19.21-20-33.08-20s-25.61,7.1-33.08,20a8,8,0,1,1-13.84-8c10.29-17.79,27.39-28,46.92-28S164.63,154.2,174.92,172Z"></path>
              </svg>
              <p>No games found.</p>
            </div>
          )}
        </div>
        {items.length > 0 && <Pagination />}
      </section>
    </main>
  );
});

export default AllGamesPage;
