import React from "react";
import styles from "./style.module.css";
import Project from "../../Components/Project/index";

import projects from "../../db";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h1>Projects</h1>
      <div className={styles.projectsContainer}>
        {projects?.map((e) => {
          return <Project img={e.img} name={e.name} desc={e.desc} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
