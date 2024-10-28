import styles from "./Button.module.scss";

const Button = ({
  children,
  onClick,
  active = false,
  accent = false,
  disabled = false,
}) => {
  return (
    <button
      className={`${styles.button} ${active ? styles.buttonActive : ""} ${
        accent ? styles.buttonAccent : ""
      }`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
