import React from "react";
import styles from "./Team.module.css";
import Teamcard from "../../Components/TeamCard/Teamcard";
// import teamsample from "../../Assets/team/team.JPG";
import aryan from "../../Assets/team/aryan.png";
import Prashant from "../../Assets/team/prashant.png";
import raj from "../../Assets/team/raj.png";
import garvit from "../../Assets/team/garvit.png";
import veer from "../../Assets/team/narwar.png";
import raunak from "../../Assets/team/raunak.png";
import utlarsh from "../../Assets/team/utkarsh.png";
import sanskriti from "../../Assets/team/vats.png";
import tushar from "../../Assets/team/tushar.png";
import AdityaMohan from "../../Assets/team/currenteam/aditya.png";
import AshutoshMishra from "../../Assets/team/currenteam/ashutosh.png";
import Ananya from "../../Assets/team/currenteam/ananya.png";
import Pranshu from "../../Assets/team/currenteam/pranshu.png";
import shreya from "../../Assets/team/currenteam/shruti.png";
import Siddarth from "../../Assets/team/currenteam/sid.png";
import Nishika from "../../Assets/team/currenteam/nishika.png";
import Shreya from "../../Assets/team/currenteam/shreya.png";
import Rithik from "../../Assets/team/currenteam/hrithik_android.png";
import Sahil from "../../Assets/team/currenteam/sahil.png";
import Anoushka from "../../Assets/team/currenteam/anushka.png";
import Sarvin from "../../Assets/team/currenteam/sarvin.png";
import Shreevesh from "../../Assets/shreevesh.png";
import updatedteam from "../../Assets/updated_team.jpg";

const founderteam = [
  {
    name: "Harveer Narwar",
    role: " ",
    img: veer,
  },
  {
    name: "Prashant Rai",
    role: "",
    img: Prashant,
  },
  {
    name: "Raj Pandey",
    role: "",
    img: raj,
  },

  {
    name: "Sanskriti Vats",
    role: "",
    img: sanskriti,
  },
];

const currentteam = [
  {
    name: "Ananya Srivastava",
    role: "President",
    img: Ananya,
  },
  {
    name: "Pranshu Gupta",
    role: "Vice President",
    img: Pranshu,
  },
  {
    name: "Shreya Bhradwaj ",
    role: "General Secretary",
    img: shreya,
  },
  {
    name: "Siddarth Yadav",
    role: "Community manager",
    img: Siddarth,
  },
  {
    name: "Nishika tyagi  ",
    role: "Social Media Lead",
    img: Nishika,
  },
  {
    name: "Shreevesh Kumar ",
    role: "Web Lead",
    img: Shreevesh,
  },

  {
    name: "Ritik Bhatt",
    role: "Android Lead",
    img: Rithik,
  },
  {
    name: "Shreya punani",
    role: "Cyber Lead",
    img: Shreya,
  },
  {
    name: "Ashutosh Mishra ",
    role: "ML Lead",
    img: AshutoshMishra,
  },
  {
    name: "Sarvin srivastava",
    role: "AR/VR Lead",
    img: Sarvin,
  },
  {
    name: "Sahil Panwar",
    role: "UI/UX Lead",
    img: Sahil,
  },
  {
    name: "Anoushka  ",
    role: "Content Lead",
    img: Anoushka,
  },
  {
    name: "Aditya Mohan ",
    role: "CP/DSA Lead",
    img: AdityaMohan,
  },
];

const pastcoreteam = [
  {
    name: "Aryan Tiwari",
    role: "Web Lead",
    img: aryan,
  },
  {
    name: "Garvit Agarwal",
    role: "ML Lead",
    img: garvit,
  },
  {
    name: "Raunak Seth",
    role: "Android Lead",
    img: raunak,
  },
  {
    name: "Utkarsh Shukla",
    role: "AR/VR Lead",
    img: utlarsh,
  },
  {
    name: "Tushar Singh",
    role: "UI/UX Lead",
    img: tushar,
  },
];

const Team = () => {
  return (
    <div className={styles.testimonial_wrapper}>
      <div className={styles.bgname}> TEAM</div>
      <div className={styles.test_text}>
        The People who Drive <div>our Mission </div>{" "}
      </div>
      <div className={styles.mainimgdiv}>
        <img className={styles.team_img} src={updatedteam} alt="illust" />
      </div>

      <div className={styles.test_text}>Founders </div>

      <div className={styles.team_container}>
        {founderteam.map((e) => (
          <Teamcard key={e.name} name={e.name} img={e.img} role={e.role} />
        ))}
      </div>
      <div className={styles.test_text}>Current Core Team </div>

      <div className={styles.team_container}>
        {currentteam.map((e) => (
          <Teamcard key={e.name} name={e.name} img={e.img} role={e.role} />
        ))}
      </div>

      <div className={styles.test_text}>First Core Team </div>

      <div className={styles.team_container}>
        {pastcoreteam.map((e) => (
          <Teamcard key={e.name} name={e.name} img={e.img} role={e.role} />
        ))}
      </div>
    </div>
  );
};

export default Team;
