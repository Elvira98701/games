import { useSelector } from "react-redux";
import Button from "@components/Button";
import { platformsList } from "@helpers/constants";

import styles from "./Platforms.module.scss";

const Platforms = ({ value, onChangePlatform }) => {
  const { items } = useSelector((state) => state.platforms);

  return (
    <div className={styles.platforms}>
      <h3>Platforms</h3>
      <div className={styles.platformsBlock}>
        <div className={styles.platform}>
          <div className={`${styles.image} ${styles.imageAll}`}></div>
          <Button onClick={() => onChangePlatform(0)} active={value === 0}>
            All platforms
          </Button>
        </div>
        {items.slice(0, 8).map(({ id, name, slug }) => (
          <div className={styles.platform} key={id}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url("${platformsList[slug]}")` }}
            ></div>
            <Button onClick={() => onChangePlatform(id)} active={value === id}>
              {name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Platforms;
