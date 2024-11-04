import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setSort } from "@redux/filter/slice";

import styles from "./Sort.module.scss";

const sortList = [
  { id: 1, name: "-added", title: "Popularity" },
  { id: 2, name: "name", title: "Name" },
  { id: 3, name: "-rating", title: "Rating" },
];

const Sort = () => {
  const dispatch = useDispatch();
  const { sort } = useSelector((state) => state.filter);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const currentTitle = sortList.find((obj) => obj.name === sort).title;

  const handleChangeSort = (event, value) => {
    event.stopPropagation();
    dispatch(setSort(value));
    setIsOpenDropdown(false);
  };

  const handleCloseDropdown = () => {
    setIsOpenDropdown(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleCloseDropdown);
    return () => document.removeEventListener("click", handleCloseDropdown);
  }, []);

  return (
    <div className={styles.sort}>
      <div
        className={styles.sortLabel}
        onClick={(event) => {
          event.stopPropagation();
          setIsOpenDropdown(!isOpenDropdown);
        }}
      >
        Order by: <b>{currentTitle}</b>
      </div>
      <div
        className={styles.sortDropdown}
        style={{
          opacity: isOpenDropdown ? 1 : 0,
          transform: isOpenDropdown ? "translateY(0)" : "translateY(50px)",
          pointerEvents: isOpenDropdown ? "all" : "none",
        }}
      >
        <ul className={styles.sortList}>
          {sortList.map(({ id, name, title }) => (
            <li
              key={id}
              onClick={(event) => handleChangeSort(event, name)}
              className={sort === name ? styles.isActive : ""}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sort;
