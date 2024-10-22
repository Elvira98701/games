import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import Button from "@components/Button";

import styles from "./Platforms.module.scss";

const Platforms = ({ value, onChangePlatform }) => {
  const { items } = useSelector((state) => state.platforms);
  const [showMore, setShowMore] = useState(false);
  const blockRef = useRef();

  useEffect(() => {
    if (showMore) {
      blockRef.current.style.height = `${blockRef.current.scrollHeight}px`;
    } else {
      blockRef.current.style.height = "";
    }
  }, [showMore]);

  return (
    <div className={styles.platforms}>
      <h3>Platforms</h3>
      <div className={styles.platformsBlock} ref={blockRef}>
        {items.slice(0, 18).map(({ id, name, image_background }) => (
          <div className={styles.platform} key={id}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${image_background})` }}
            ></div>
            <Button onClick={() => onChangePlatform(id)} active={value === id}>
              {name}
            </Button>
          </div>
        ))}
      </div>
      <Button onClick={() => setShowMore(!showMore)} accent={true}>
        {showMore ? "Hide" : "Show all"}
      </Button>
    </div>
  );
};

export default Platforms;
