import { Link } from "react-router-dom";

import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <Link className={styles.logo} to="/">
      <svg className={styles.logoIcon}>
        <use href="./logo-sprite.svg#logo-far-cry-ai"></use>
      </svg>
    </Link>
  );
};

export default Logo;
