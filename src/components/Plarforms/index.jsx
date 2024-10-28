import { useDispatch, useSelector } from "react-redux";
import { setPage, setPlatformId } from "@redux/filter/slice";
import { platformsList } from "@helpers/constants";
import Button from "@components/Button";

import styles from "./Platforms.module.scss";

const Platforms = () => {
  const dispatch = useDispatch();
  const { platformId } = useSelector((state) => state.filter);
  const { items } = useSelector((state) => state.platforms);

  const onChangePlatform = (event, id) => {
    event.stopPropagation();
    dispatch(setPlatformId(id));
    dispatch(setPage(1));
  };

  return (
    <div className={styles.platforms}>
      <h3>Platforms</h3>
      <div className={styles.platformsBlock}>
        <div className={styles.platform}>
          <div className={`${styles.image} ${styles.imageAll}`}></div>
          <Button
            onClick={(event) => onChangePlatform(event, 0)}
            active={platformId === 0}
          >
            All platforms
          </Button>
        </div>
        {items.slice(0, 8).map(({ id, name, slug }) => (
          <div className={styles.platform} key={id}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url("${platformsList[slug]}")` }}
            ></div>
            <Button
              onClick={(event) => onChangePlatform(event, id)}
              active={platformId === id}
            >
              {name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Platforms;
