import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { setPage, setSearchValue } from "@redux/filter/slice";

import styles from "./Search.module.scss";

const Search = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(setSearchValue(inputValue));
      if (inputValue.length > 0) {
        dispatch(setPage(1));
      }
    }, 800);

    return () => clearTimeout(timeoutId);
  }, [inputValue, dispatch]);

  return (
    <div className={styles.search}>
      <svg
        className={styles.searchIcon}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
      </svg>
      <input
        className={styles.searchInput}
        type="search"
        name="search"
        autoComplete="off"
        placeholder="Search for games..."
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
    </div>
  );
};

export default Search;
