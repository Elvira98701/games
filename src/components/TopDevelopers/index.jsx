import { useSelector } from "react-redux";
import styles from "./TopDevelopers.module.scss";

const TopDevelopers = () => {
  const { developers } = useSelector((state) => state.developers);
  return (
    <section className={styles.topDevelopers}>
      <div className={`${styles.topDevelopersInner} container`}>
        <h2>Developers</h2>
        <ul className={styles.topDevelopersList}>
          {developers.map((developer) => (
            <li className={styles.topDevelopersItem} key={developer.id}>
              {developer.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TopDevelopers;
