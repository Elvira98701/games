import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Nav.module.scss";

const Nav = () => {
  const { favourites } = useSelector((state) => state.favourites);
  return (
    <nav>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink
            className={`${styles.navLink} ${styles.favourites}`}
            to="/favourites"
            title="favourites"
          >
            <span
              className={styles.favouritesCounter}
              style={{
                transform: favourites.length === 0 ? "scale(0)" : "scale(1)",
              }}
            >
              {favourites.length}
            </span>
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            className={`${styles.navLink} ${styles.games}`}
            to="/games"
            title="games"
          ></NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
