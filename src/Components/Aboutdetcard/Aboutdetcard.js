import React from 'react'
import styles from './Aboutdetcard.module.css'
const Aboutdetcard = (props) => {
  return (
   
    <div className={styles.domain_card_wrapper}>
    <div className={styles.domain_name}>{props.name}</div>
    <div className={styles.domain_data}>{props.data}</div>
  
    </div>
  )
}

export default Aboutdetcard
