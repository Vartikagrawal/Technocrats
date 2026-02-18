import React, { useEffect, useState } from "react";
import styles from "./Teamsection.module.css";

const Teamsection = () => {
  const [value, setvalue] = useState(false);
  const [variable, setvariable] = useState(" ");

  useEffect(() => {
    if (value) {
      setvariable("block");
    } else {
      setvariable("none");
    }
  }, [value]);

  return (
    <div className={styles.team_wrapper} id="team">
      <div className={styles.bgname}> TEAM</div>
      <div className={styles.team_text}>
        The People Who Drive <div>Our Mission</div>{" "}
      </div>

      <div>
        <div></div>
        <div className={styles.team_content}>
          Mission: Acclaiming innovative reverence through technological
          devotion optimistic of designing a realm of creative exploration and
          collaborative innovation along the objective of visionary evolution in
          the pursuit of technological pinnacle, the mission of 'Technocrats'
          traces the picture of a passionate community which stands appreciative
          of versatility in diversity, through an odyssey of hands-on
          experiences and knowledge-sharing to empower tech enthusiasts in
          shaping an ingenious future.
          <div className={styles.team_content_2}>
            Vision: Premeiring as a dedicated precision towards the cultuvation
            of technological innovation in creative enthusiasm of interactive
            leadership among the scholars of the Institute, 'Technocrats'
            envisions a furturistic community with a motivational complexity,
            empowering members past the constraints of the orthodox.
          </div>
          <div className={styles.team_content_2} style={{ display: variable }}>
            The Technocrats Club, founded on July 18, 2023, unites students
            passionate about web development, augmented reality, Android
            development, machine learning, and competitive programming. Our
            mission is to build a vibrant community of learners and innovators
            who excel through active participation in classes, events, and
            hackathons.
            <br />
            In just one year, the Technocrats Club has become a thriving hub for
            tech enthusiasts. We've enhanced members' skills through diverse
            classes and workshops, earned accolades in various events and
            hackathons, and fostered innovation through collaborative projects
            and consistent mentorship. Our journey so far highlights our
            commitment to excellence and achievement.
          </div>
        </div>
      </div>
      <button className={styles.teambtn} onClick={() => setvalue(true)}>
        View All
      </button>
    </div>
  );
};

export default Teamsection;
