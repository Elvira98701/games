import { useSelector } from "react-redux";
import styles from "./TopDevelopers.module.scss";

const TopDevelopers = () => {
  const { developers } = useSelector((state) => state.developers);

  return (
    <section className={styles.topDevelopers}>
      <div className="container">
        <div className={styles.topDevelopersInner}>
          <h2>
            Developers{" "}
            <svg
              className={styles.topDevelopersStar}
              width="50"
              height="50"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                fill="#e0e1dd"
                d="M38.2 34.6L64 32l-25.8-2.6l16.4-20l-20 16.4L32 0l-2.6 25.8l-20-16.4l16.4 20L0 32l25.8 2.6l-16.4 20l20-16.4L32 64l2.6-25.8l20 16.4z"
              ></path>
            </svg>
          </h2>
          <ul className={styles.topDevelopersList}>
            {developers.map((developer) => (
              <li className={styles.topDevelopersItem} key={developer.id}>
                <span className={styles.topDevelopersName}>
                  {developer.name}
                </span>
                <svg
                  className={styles.topDevelopersIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM164,96v48a4,4,0,0,1-8,0V105.66L98.83,162.83a4,4,0,0,1-5.66-5.66L150.34,100H112a4,4,0,0,1,0-8h48A4,4,0,0,1,164,96Z"></path>
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TopDevelopers;
