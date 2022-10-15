import React from "react";
import projects from "../../db";
import styles from "./style.module.css";
import Project from "../../Components/Project/index";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const history = useNavigate();
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <img
          src="/undraw_Artificial_intelligence_re_enpp-removebg-preview.png"
          alt=""
        />
        <div className={styles.content}>
          <h1>Technical Club - FLUX</h1>
          <p>
            A robotics club dreaming high, passionate working on
            impossible-seeming works.
          </p>
          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSeogmiIQUPauroStvJ2KDJWKQpzHvdPnk-Tsy1lL3anLsmWSw/closedform"
              )
            }
          >
            Join Us
          </button>
        </div>
      </div>
      <h1 className={styles.heading}>Our Projects...</h1>
      <div className={styles.projectsDisplay}>
        {projects?.slice(0, 3).map((e) => {
          return <Project name={e.name} img={e.img} desc={e.desc} />;
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "1.25rem 0",
        }}
      >
        <button
          className={styles.projectsMore}
          onClick={() => history("/projects")}
        >
          View More
        </button>
      </div>
      <div className={styles.events}>
        <h1 className={styles.heading}>Events..</h1>
        <div className={styles.eventsPhoto}>
          <img
            src="/events/269818666_3107308649503471_2138288918315494793_n.jpg"
            alt=""
          />
          <img
            src="/events/271549759_652551995943013_7856338258690151647_n.jpg"
            alt=""
          />
          <img
            src="/events/271499484_1263785820693643_6268781589617806988_n.jpg"
            alt=""
          />
          <img
            src="/events/271674568_482981689860373_1641730642672611296_n.jpg"
            alt=""
          />
        </div>
      </div>
      <h1 className={styles.heading}>About Us...</h1>
      <p style={{ fontSize: "1.7rem", textAlign: "center", padding: "0 5%" }}>
        Technical Club - FLUX is the official Technical club of S.A.T.I. Vidisha
        previously known as Innovation club - FLUX. Our club in a nutshell makes
        cool projects, organises workshops/events while doing a lot of other fun
        activities. We mainly focus on latest and future demanding technologies
        like Internet of Things, Machine Learning, Artificial Intelligence, and
        many more....
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "1.25rem 0",
        }}
      >
        <button
          className={styles.projectsMore}
          onClick={() => history("/about")}
        >
          Know More
        </button>
      </div>
    </div>
  );
};

export default Home;
