import { useSelector } from "react-redux";
import styles from "./TopDevelopers.module.scss";

const TopDevelopers = () => {
  const { developers } = useSelector((state) => state.developers);
  return (
    <section className={styles.topDevelopers}>
      <div className="container">
        <div className={styles.topDevelopersInner}>
          <svg
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
          <h2>Developers</h2>
          <ul className={styles.topDevelopersList}>
            {developers.map((developer) => (
              <li className={styles.topDevelopersItem} key={developer.id}>
                {developer.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TopDevelopers;
