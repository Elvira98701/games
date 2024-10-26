import { useState } from "react";
import styles from "./Sort.module.scss";

const sortList = [
  { id: 1, name: "-name" },
  { id: 2, name: "-released" },
  { id: 3, name: "rating_top" },
];

const Sort = ({ value, onChangeSort }) => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className={styles.sort}>
      <div
        className={styles.sortLabel}
        onClick={() => setOpenPopup(!openPopup)}
      >
        Order by: <b>{value}</b>
      </div>
      <div
        className={styles.sortPopup}
        style={{
          opacity: openPopup ? 1 : 0,
          transform: openPopup ? "translateY(0)" : "translateY(50px)",
          pointerEvents: openPopup ? "all" : "none",
        }}
      >
        <ul className={styles.sortList}>
          {sortList.map(({ id, name }) => (
            <li key={id} onClick={() => onChangeSort(name)}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sort;
