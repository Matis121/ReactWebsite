import React from "react";
import styles from "./EmailList.module.scss";

const EmailList = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.itemsList}>
        <li className={styles.emailText}>mateusz6246@gmail.com</li>
      </ul>
      <ul className={styles.itemsList}>
        <div className={styles.line}></div>
      </ul>
    </div>
  );
};

export default EmailList;
