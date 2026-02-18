import React from "react";
import styles from "./Videocard.module.css";
const Videocard = (props) => {
  return (
    <div className={styles.videocardcont}>
      <img className={styles.thumbnail} src={props.img} alt="image_of" />
      <div className={styles.text_vide_cont}>
        <div className={styles.title_name_1}>{props.name}</div>
        <div className={styles.title_name}>{props.channel_name}</div>
      </div>
    </div>
  );
};

export default Videocard;
