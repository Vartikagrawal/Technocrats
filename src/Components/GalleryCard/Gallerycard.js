import React from 'react'
import styles from './Gallerycard.module.css';
const Gallerycard = (props) => {
  return (
    <div >
     <img className={styles.imggall} src={props.image} alt="illustartion"/> 
    </div>
  )
}

export default Gallerycard
