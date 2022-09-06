import React from "react";
import styles from "./Projects.module.scss";
import { RiGithubLine, RiExternalLinkLine } from "react-icons/ri";

const Projects = (props) => {
  return (
    <>
      {props.side === "left" ? (
        <div className={styles.flex}>
          <div className={styles.flex__left}>
            <img src={props.image}></img>
          </div>
          <div className={styles.flex__right}>
            <p className={styles.flex__right_feature}>Wyróżnione projekty</p>
            <h1 className={styles.flex__right_title}>{props.title}</h1>
            <p className={styles.flex__right_desc}>{props.desc}</p>
            <ul className={styles.flex__right_specs}>
              <li className={styles.flex__right_specs_spec}>{props.spec1}</li>
              <li className={styles.flex__right_specs_spec}>{props.spec2}</li>
              <li className={styles.flex__right_specs_spec}>{props.spec3}</li>
              <li className={styles.flex__right_specs_spec}>{props.spec4}</li>
              <li className={styles.flex__right_specs_spec}>{props.spec5}</li>
            </ul>
            <a href={props.extLink}>
              <RiExternalLinkLine className={styles.logo}></RiExternalLinkLine>
            </a>
            <a href={props.gitLink}>
              <RiGithubLine className={styles.logo}></RiGithubLine>
            </a>
          </div>
        </div>
      ) : (
        <div className={styles.flex2}>
          <div className={styles.flex2__right2}>
            <p className={styles.flex2__right2_feature2}>Wyróżnione projekty</p>
            <h1 className={styles.flex2__right2_title2}>{props.title}</h1>
            <p className={styles.flex2__right2_desc2}>{props.desc}</p>
            <ul className={styles.flex2__right2_specs2}>
              <li className={styles.flex2__right2_specs2_spec2}>
                {props.spec1}
              </li>
              <li className={styles.flex2__right2_specs2_spec2}>
                {props.spec2}
              </li>
              <li className={styles.flex2__right2_specs2_spec2}>
                {props.spec3}
              </li>
              <li className={styles.flex2__right2_specs2_spec2}>
                {props.spec4}
              </li>
              <li className={styles.flex2__right2_specs2_spec2}>
                {props.spec5}
              </li>
            </ul>
            <a href={props.extLink}>
              <RiExternalLinkLine className={styles.logo}></RiExternalLinkLine>
            </a>
            <a href={props.gitLink}>
              <RiGithubLine className={styles.logo}></RiGithubLine>
            </a>
          </div>
          <div className={styles.flex__left}>
            <img src={props.image}></img>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
