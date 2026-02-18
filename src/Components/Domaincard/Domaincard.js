import React from "react";
import styles from "./Domaincard.module.css";
const DomainCard = (props) => {
  return (
    <div className={styles.domain_card_wrapper}>
      <img src={props.img} alt="illustartion" className={styles.domain_img} />
      <div>
        <div className="text-center ">
          <div className={styles.domain_name}>{props.name}</div>
        </div>
        {/* <div className={styles.domain_add_name}>{props.addon}</div> */}
      </div>
    </div>
  );
};

export default DomainCard;
