import React from 'react'
import styles from './Testicard.module.css'

import {  TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";
const Testicard = (props) => {
  return (
    <div className={styles.testcard_wrapper}>
        <div style={{margin:"15px", display:"flex",gap:"20px"}}>
        <img style={{borderRadius:"50%",width:"70px"}} alt="illustartion" src={props.img}/>
        <div>
        <div className={styles.testcrad_name}>{props.name}</div>
      <div className={styles.testcard_role}>{props.role}</div>
      <div className={styles.social_handles}>
     <a href={props.linkedin}><TiSocialLinkedin style={{backgroundColor:"white"}}/></a> 
     <a href={props.twitter}><TiSocialTwitter style={{backgroundColor:"white"}}/></a>
      
      </div>
        </div>
        </div>
       
   
      <div className={styles.testcard_desc}>{props.desc}</div>

   
    </div>
  )
}

export default Testicard
