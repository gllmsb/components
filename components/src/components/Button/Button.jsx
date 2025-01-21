import styles from "./Button.module.scss";

export const Button = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={() => {
      if (onClick) onClick();
    }}>
      {text}
    </button>
  );
};
