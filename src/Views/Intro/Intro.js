import React from "react";
import styles from "./Intro.module.scss";

import Buttons from "../../Components/Buttons";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <>
      <div className={styles.wrapper} id="intro">
        <h2 className={styles.green}>Cześć, nazywam się</h2>
        <h1 className={styles.lightestSlate}>Mateusz Jarząbek.</h1>
        <h1 className={styles.lightSlate}>Buduję rzeczy do sieci</h1>
        <div className={styles.textWrapper}>
          <h2 className={styles.slate}>
            Jestem pretendującym Junior <span>Frontend Developerem,</span> który
            ciągle rozwija swoje umiejetności w tej dziedzinie. Na ten moment
            skupiam się na dogłębnym poznawaniu <span>frameworka Reacta </span>
            oraz wszelkich technologii wokół niego.
          </h2>
        </div>
        <div className={styles.marginTop}>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            <Buttons big href="#">
              Sprawdź moją stronę!
            </Buttons>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Intro;
