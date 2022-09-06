import React from "react";
import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    <div>
      {props.type === "link" ? (
        <a href={props.link} className={styles.button}>
          {props.value}
        </a>
      ) : (
        <button className={styles.button}>{props.value}</button>
      )}
    </div>
  );
};

export default Button;
