import Logo from "@components/Logo";
import Nav from "@components/Nav";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerInner} container`}>
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
