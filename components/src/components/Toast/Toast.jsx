import { useEffect } from "react";
import styles from "./Toast.module.scss"; 

export const Toast = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); 
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      {message}
      <button onClick={onClose}>✖</button>
    </div>
  );
};
