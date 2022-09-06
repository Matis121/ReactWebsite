import React from "react";
import styles from "./About.module.scss";
import Title from "../../Components/Title";
import Mylogo from "../../Assets/Mylogo.png";

const About = () => {
  return (
    <div className={styles.wrapper} id="about">
      <Title number="01." value="o mnie"></Title>
      <div className={styles.sides}>
        <div className={styles.side__left}>
          <p className={styles.paragraph}>
            Cześć! Nazywam się Mateusz Jarząbek i ogromną przyjemność sprawia mi
            <span> tworzenie stron oraz aplikacji internetowych.</span> Moje
            pierwsze kroki w tym temacie zacząłem stawiać jeszcze za czasów
            Technikum, był to rok 2017.
          </p>
          <p className={styles.paragraph}>
            Już wtedy poznałem podstawy jak chodzi o Html, Css oraz
            <span> Javascript. </span>
            Był to wystarczający bodzieć by kontynuować naukę w tej dziedzinie.
          </p>
          <p className={styles.paragraph}>
            Z tego też tytułu poszedłem na studia związane właśnie z tym
            kierunkiem. Natomiast swoją wiedzę poszerzam głównie z kursów
            wszelkiej maści oraz na <span>własnych projektach.</span>
          </p>
          <p className={styles.paragraph}>
            Poniżej znajduję się lista kilku z technologii z którymi pracowałem:
          </p>
          <ul className={styles.skillsList}>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Html</li>
            <li>Css / Scss</li>
            <li>Styled Components</li>
            <li>Redux</li>
          </ul>
        </div>
        <div className={styles.side__right}>
          <img src={Mylogo} alt="MyPhoto" />
        </div>
      </div>
    </div>
  );
};

export default About;
