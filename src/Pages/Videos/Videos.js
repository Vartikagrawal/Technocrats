
import styles from './Videos.module.css'
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Videocard from '../../Components/Videocard/Videocard';
import { Link } from 'react-router-dom';
const Videos = () => {
    const [params, setParams] = useSearchParams();

    const [data, setdata] = useState({});
  
    const fetchData = async () => {
      const playlistdata = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${params.get(
          "id"
        )}&key=AIzaSyDJ52biB-uP3dEVPSavt6PZZWY0Ee1Rp3g`
      );
      const json = await playlistdata.json();
      console.log(json);
      setdata(json);
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  return (
    <div className={styles.team_wrapper}>
 <div className={styles.bgname}> VIDEOS</div>
      <div className={styles.team_text}>
      Watch valuable content  <div>in video format</div>{" "}
      </div>

      <div className={styles.video_container}>

      {data?.items?.map((e)=> 
      <Link style={{textDecoration:"none"}} to={"/video?v="+e.snippet.resourceId.videoId}>
       <Videocard name={e.snippet.title} img={e.snippet.thumbnails.medium.url} channel_name={e.snippet.channelTitle}/>
      
      </Link>)}
    </div>
    </div>
  )
}

export default Videos
