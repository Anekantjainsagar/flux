import React from "react";
import styles from "./style.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <h1>ABOUT</h1>
        <div className={styles.line}></div>
        Technical Club - FLUX is the official Technical club of S.A.T.I. Vidisha
        previously known as Innovation club - FLUX. Our club in a nutshell makes
        cool projects, organises workshops/events while doing a lot of other fun
        activities. We mainly focus on latest and future demanding technologies
        like Internet of Things, Machine Learning, Artificial Intelligence, and
        many more...
        <h1 className={styles.heading}>WHAT DO WE DO</h1>
        <div className={styles.line}></div>
        <p>
          There is a saying that "Pictures are worth thousand words". We can't
          mention everything So get a Glipmse of few here.
        </p>
      </div>
      <img
        src="/undraw_Visionary_technology_re_jfp7-removebg-preview.png"
        alt=""
      />
    </div>
  );
};

export default About;
