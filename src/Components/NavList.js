import React from "react";
import styles from "./NavList.module.scss";
import { RiGithubLine, RiLinkedinFill } from "react-icons/ri";

const NavList = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.itemsList}>
        <li>
          <a href="https://www.linkedin.com/in/mateusz-jarz%C4%85bek-2b0091237/">
            <RiLinkedinFill className={styles.logo}></RiLinkedinFill>
          </a>
        </li>
      </ul>
      <ul className={styles.itemsList}>
        <li>
          <a href="https://github.com/Matis121">
            <RiGithubLine className={styles.logo}></RiGithubLine>
          </a>
        </li>
      </ul>
      <ul className={styles.itemsList}>
        <div className={styles.line}></div>
      </ul>
    </div>
  );
};

export default NavList;
