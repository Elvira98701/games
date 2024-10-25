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
        <h2 className={styles.aboutTitle}>Here you will find</h2>
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
