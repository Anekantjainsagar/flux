import React from "react";
import styles from "./style.module.css";

const Project = ({ name, desc, img }) => {
  return (
    <div className={styles.container}>
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>
        {desc.length > 0
          ? desc
          : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut blanditiis, at quidem culpa quod iure reiciendis dolorem cumque consequatur, alias numquam ut hic quaerat inventore doloribus dolore, ea corporis obcaecati minima!"}
      </p>
    </div>
  );
};

export default Project;
