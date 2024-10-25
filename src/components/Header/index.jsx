import { Link } from "react-router-dom";
import Logo from "@components/Logo";

import styles from "./Header.module.scss";
import { useSelector } from "react-redux";

const Header = () => {
  const { favourites } = useSelector((state) => state.favourites);
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <Logo />
        <ul className={styles.navList}>
          <li>
            <Link
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
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.navLink} ${styles.games}`}
              to="/games"
              title="games"
            ></Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
