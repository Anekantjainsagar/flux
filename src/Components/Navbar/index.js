import React from "react";
import styles from "./style.module.css";

import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const history = useNavigate();

  return (
    <div className={styles.nav}>
      <div className={styles.logo} onClick={() => history("/")}>
        <img src="/android-icon-144x144.png" alt="" />
      </div>
      <div className={styles.navItems}>
        <li>
          <Link to="/" className={styles.items}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className={styles.items}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/about" className={styles.items}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className={styles.btn}
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSeogmiIQUPauroStvJ2KDJWKQpzHvdPnk-Tsy1lL3anLsmWSw/closedform"
              )
            }
          >
            Join Us
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
