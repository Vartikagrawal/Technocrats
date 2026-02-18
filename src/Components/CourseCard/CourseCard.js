import React from "react";
import styles from "./CourseCard.module.css";

const CourseCard = (props) => {
  return (
    <div className={styles.course_card_container}>
      <img className={styles.img} src={props.img} alt="image_of" />
      <div className={styles.details}>
       {props.data}
      </div>
      <button className={styles.contbtn}>View More</button>
    </div>
  );
};

export default CourseCard;
