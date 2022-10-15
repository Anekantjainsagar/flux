import React from "react";
import styles from "./style.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <img src="/android-icon-144x144.png" alt="" />
      </div>
      <div className={styles.navItems}>
        <li>
          <a href="/" className={styles.items}>Events</a>
        </li>
        <li>
          <a href="/" className={styles.items}>About</a>
        </li>
        <li>
          <a href="/" className={styles.btn}>Register now</a>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
