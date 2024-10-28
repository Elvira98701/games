import { Link } from "react-router-dom";
import styles from "./About.module.scss";

const aboutList = [
  {
    id: 1,
    title: "Exclusive novelties",
    description:
      "Immerse yourself in the world of the freshest and hottest releases that have just entered the market.",
  },
  {
    id: 2,
    title: "Immortal classics",
    description:
      "Immerse yourself in legendary time-tested games that continue to delight with their depth and fascination.",
  },
  {
    id: 3,
    title: "Games for everyone",
    description:
      "Discover games for every taste - from exciting action games to fascinating puzzles, from strategies to simulators.",
  },
];

const About = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.aboutHeader}>
          <svg
            className={styles.aboutIcon}
            width="60"
            height="60"
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
          <h2 className={styles.aboutTitle}>About us</h2>
          <p className={styles.aboutSlogun}>
            We are a team of avid gamers who know everything about video games.
            We are happy to share our passion for games with you, helping you
            find the perfect game for any mood.
          </p>
          <Link className={styles.aboutLink} to="/games">
            See games
          </Link>
        </div>
        <div className={styles.aboutContent}>
          {aboutList.map(({ id, title, description }, index) => (
            <div
              key={id}
              className={`${styles.aboutCard} ${
                styles[`aboutCard-${index + 1}`]
              }`}
            >
              <h3 className={styles.aboutSubtitle}>{title}</h3>
              <p className={styles.aboutDescription}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
