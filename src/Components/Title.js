import React from "react";
import styles from "./Title.module.scss";

const Title = (props) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        <span className={styles.numbers}>{props.number}</span>
        {props.value}
      </h1>
      <div className={styles.line}></div>
    </div>
  );
};

export default Title;
