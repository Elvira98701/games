import { useSelector } from "react-redux";
import Button from "@components/Button";

import styles from "./Platforms.module.scss";
import { platformsList } from "@helpers/constants";

const Platforms = ({ value, onChangePlatform }) => {
  const { items } = useSelector((state) => state.platforms);

  return (
    <div className={styles.platforms}>
      <h3>Platforms</h3>
      <div className={styles.platformsBlock}>
        {items.slice(0, 8).map(({ id, name, slug }) => (
          <div className={styles.platform} key={id}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${platformsList[slug]})` }}
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
