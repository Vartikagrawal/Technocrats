import React from "react";
import { useNavigate } from "react-router-dom";
import sih from "../../Assets/SIH.jpg";
import abhinavintern from "../../Assets/abhinavintern.png";
import dhruvintern from "../../Assets/dhruvintern.png";
import sarvinnec from "../../Assets/sarviniec.jpg";
import styles from "./Achievment.module.css";

const Achievment = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.pageWrapper}>
      <h1 className={styles.sectionHeading}>
        <span className={styles.headingAccent}>OUR</span> ACHIEVEMENTS
      </h1>
      <p className={styles.sectionSubtitle}>
        Milestones that define the Technocrats journey
      </p>

      <div className={styles.cardsContainer}>
        <div
          className={`${styles.card} ${styles.hackathonCard}`}
          onClick={() => navigate("/achievements/hackathons")}
        >
          <div className={styles.cardTag}>HACKATHONS</div>
          <div className={styles.cardImageGrid}>
            <img src={sih} alt="Hackathon" className={styles.gridImg} />
          </div>
          <div className={styles.cardBody}>
            <h2 className={styles.cardTitle}>Hackathon Wins</h2>
            <p className={styles.cardDesc}>
              From Smart India Hackathon to NASA Space Apps Challenge, our members have conquered 
              prestigious national competitions, bringing home trophies and recognition across 
              India's top technical institutions.
            </p>
            <div className={styles.cta}>
              Explore All Hackathons
              <span className={styles.ctaArrow}>→</span>
            </div>
          </div>
          <div className={styles.cardGlow} />
        </div>
        <div
          className={`${styles.card} ${styles.internCard}`}
          onClick={() => navigate("/achievements/internships")}
        >
          <div className={styles.cardTag}>INTERNSHIPS</div>
          <div className={styles.cardImageGrid}>
            <img src={abhinavintern} alt="Internship" className={styles.gridImg} />
          </div>
          <div className={styles.cardBody}>
            <h2 className={styles.cardTitle}>Industry Internships</h2>
            <p className={styles.cardDesc}>
              Our members secure coveted positions at companies like NEC Corporation India, 
              Ostello India Pvt Ltd, and TBI-KIET, turning academic passion into real-world 
              product impact.
            </p>
            <div className={styles.cta}>
              Explore All Internships
              <span className={styles.ctaArrow}>→</span>
            </div>
          </div>
          <div className={styles.cardGlow} />
        </div>
      </div>
    </section>
  );
};

export default Achievment;