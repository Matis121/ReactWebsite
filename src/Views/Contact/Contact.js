import React from "react";
import styles from "./Contact.module.scss";
import Buttons from "../../Components/Buttons";

const Contact = () => {
  return (
    <>
      <div className={styles.wrapper} id="contact">
        <div className={styles.contactWrapper}>
          <h2 className={styles.heading}>
            <span>03.</span>co dalej?
          </h2>
          <h2 className={styles.title}>Skontaktuj się</h2>
          <p className={styles.desc}>
            Jeśli masz do mnie jakiekolwiek pytanie, zapraszam do kontaktu.{" "}
            <br></br>Moja osoba jak i skrzynka e-mailowa jest zawsze otwarta na
            wszelkie propozycje współpracy.
          </p>
          <Buttons big href="mailto: mateusz6246@gmail.com">
            E-mail
          </Buttons>
          <div className={styles.built}>
            <a>Built by Mateusz Jarząbek</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
