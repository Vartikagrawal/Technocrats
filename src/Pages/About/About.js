import React from "react";
import styles from "./About.module.css";
// import aboutIllustration from "../../Assets/home.png";
const About = () => {
  return (
    <>
      <div className={styles.about_wrapper}>
        {/* <h1 className={styles.about_heading}> About Us </h1> */}
        <div className={styles.bgname}>TECHNOCRATS</div>

  <div className={styles.about_text_wrapper}>
         <span className={styles.about_text_1}>Cultivating-- </span>
         <span className={styles.about_text_1}> Curiosity in</span>
        <span className={styles.about_text_1}>
        Innovative Design
        </span>
        </div>
        <div className={styles.about_text_2_wrapper}>
        <div className={styles.about_text_2}>
        Entitled as 'Technocrats,' originating from the roots aligning along the concept of 'opportunities,' we aim at maneuvering the appreciation of innovation in creation of optimistic significance while building a concrete bridge between opportunistic enrichment and talent, for our belief remarks that no talent shall be left unveiled, unappreciated.

        </div>
        </div>
      </div>
    </>
  );
};

export default About;
