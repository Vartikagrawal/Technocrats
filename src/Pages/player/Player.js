import React from 'react'
import { useSearchParams } from 'react-router-dom'
import styles from'./Player.module.css'
const Player = () => {
    const [params, setParam] = useSearchParams();
    console.log(params.get("v"))
  
  return (
    <div className={styles.player_container}>
    <iframe
        width="100vw"
        height="415"
        src={"https://www.youtube.com/embed/"+params.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe> 
     
      </div>
  )
}

export default Player
