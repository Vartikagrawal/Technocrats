import React from "react";
import styles from "./AchivementCard.module.css";

const AchivementCard = ({ title, image, description, link }) => {
  return (
    <div className={styles.eventCard}>
      <div className={styles.eventCardImageWrapper}>
        <img src={image} alt={title} className={styles.eventCardImage} />
        <div className={styles.eventCardImageOverlay} />
      </div>

      <div className={styles.eventCardBody}>
        <h3 className={styles.eventCardTitle}>{title}</h3>
        <p className={styles.eventCardDescription}>{description}</p>
        {link && (
          <a href={link} target="_blank" rel="noreferrer" className={styles.eventCardBtn}>
            View Event
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default AchivementCard;