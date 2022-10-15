import React from "react";
import styles from "./style.module.css";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src="/android-icon-144x144.png" alt="" />
          <h1>Flux</h1>
        </div>
        <p>
          A robotics club dreaming high, passionate working on
          impossible-seeming works.
        </p>
      </div>
      <div className={styles.icons}>
        <AiFillLinkedin
          size={30}
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open("https://in.linkedin.com/company/fluxsati")
          }
        />
        <AiOutlineInstagram
          size={30}
          style={{ cursor: "pointer" }}
          onClick={() =>
            window.open("https://www.instagram.com/fluxsati/?hl=en")
          }
        />
        <AiFillFacebook
          size={30}
          style={{ cursor: "pointer" }}
          onClick={() => window.open("https://www.facebook.com/fluxsati/")}
        />
      </div>
    </div>
  );
};

export default Footer;
