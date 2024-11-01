import styles from "./Footer.module.scss";

const SOCIALS = [
  {
    id: 1,
    link: "https://web.telegram.org",
    title: "telegram",
  },
  {
    id: 2,
    link: "https://instagram.com",
    title: "instagram",
  },
  {
    id: 3,
    link: "https://dribbble.com/",
    title: "dribbble",
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <small className={styles.footerRights}>
            &#64;2024 All right reserved
          </small>
          <ul className={styles.footerList}>
            {SOCIALS.map(({ id, link, title }) => (
              <li key={id}>
                <a className={styles.footerLink} href={link} target="_blank">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
