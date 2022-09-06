import React from "react";
import styles from "./Navigation.module.scss";
import Button from "../../Components/Button";
import Buttons from "../../Components/Buttons";
import { Link } from "react-scroll";

const Navigation = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navWrapper}>
        <ul className={styles.links}>
          <Link
            to="intro"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            <li className={styles.link__logo}>
              <span className={styles.link__logo}>MJ</span>
            </li>
          </Link>
        </ul>
        <ul className={styles.links}>
          <li className={styles.link}>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              <span className={styles.link__numbers}>01.</span>O mnie
            </Link>
          </li>

          <li className={styles.link}>
            <Link
              to="projects"
              spy={true}
              offset={150}
              smooth={true}
              duration={500}
            >
              <span className={styles.link__numbers}>02.</span>Projekty
            </Link>
          </li>

          <li className={styles.link}>
            <Link to="contact" spy={true} smooth={true} duration={500}>
              <span className={styles.link__numbers}>03.</span>Kontakt
            </Link>
          </li>
          <li className={styles.link}>
            <Buttons href="https://drive.google.com/file/d/1xw3C70mMEMOOBe_i5cXxcXJfE_xyHSPv/view?usp=sharing">
              CV
            </Buttons>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
