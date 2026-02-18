import React from "react";
import styles from "./Teamcard.module.css";



const Teamcard = (props) => {
  return (
    <div className={styles.team_card_wrapper}>
      <img className={styles.teammate_img} src={props.img} alt="illustartion" />
      <div className={styles.teammate_name}>{props.name}</div>
      <div className={styles.teammate_name}>{props.role}</div>
    </div>
  );
};

export default Teamcard;
