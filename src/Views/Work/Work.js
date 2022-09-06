import React from "react";
import styles from "./Work.module.scss";
import Title from "../../Components/Title";
import Projects from "../../Components/Projects";
import FirstProjectPhoto from "../../Assets/first-photo-1.png";
import SecondProjectPhoto from "../../Assets/second-photo-1.png";
import ThirdProjectPhoto from "../../Assets/third-photo-1.png";

const Work = () => {
  return (
    <>
      <div className={styles.wrapper} id="projects">
        <Title number="02." value="projekty"></Title>
        <Projects
          side="left"
          image={FirstProjectPhoto}
          title="Shopping Cart"
          desc="To projekt, który przedstawia prosty sklep internetowy, który został zbudowany w React'cie. W aplikacji jest możliwość dodania konkretnego produktu do koszyka, podejrzenie aktualnego zamówienia oraz zmiany ilości produktów"
          spec2="Html"
          spec3="Scss"
          spec4="React"
          extLink="https://matis121.github.io/shopping/"
          gitLink="https://github.com/Matis121/shopping"
        ></Projects>
        <Projects
          image={SecondProjectPhoto}
          title="Weather App"
          desc="Aplikacja po wpisaniu konkretnej lokalizacji przedstawi nam aktualną pogodę w tym miejscu. Wykorzystuje ona połączenie z API openweathermap"
          spec1="Html"
          spec2="Scss"
          spec3="API"
          spec4="React"
          gitLink="https://github.com/Matis121/WeatherApp"
          extLink="https://matis121.github.io/WeatherApp/"
        ></Projects>
        <Projects
          side="left"
          image={ThirdProjectPhoto}
          title="Simple Chat"
          desc="Jest to prosty komunikator, który działa na podstawie FireBase, dodatkową funkcją tego projektu jest autoryzacja użytkownika poprzez Google"
          spec1="Html"
          spec2="Scss"
          spec3="FireBase"
          spec4="React"
          gitLink="https://github.com/Matis121/SimpleChat"
          extLink="https://matis121-simplechat.netlify.app/"
        ></Projects>
      </div>
    </>
  );
};

export default Work;
