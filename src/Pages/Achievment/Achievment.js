import React from "react";
import innotech from "../../Assets/innotech.jpg";
import sih from "../../Assets/SIH.jpg";
import nasaspaceapp from "../../Assets/nasaspaceapp.jpg";
import techsamurai from "../../Assets/techsamurai.jpg";
import ieee from "../../Assets/pranshuieee.jpg";
import gsoc from "../../Assets/gsoc.jpg";
import allahabadevent from "../../Assets/allahabadevents.jpg";
import kodekombat from "../../Assets/kodekombat.jpg";
import ideatex from "../../Assets/Idetatex.jpg";
import nitpatna from "../../Assets/nitpatna.jpg";
import sarvinnec from "../../Assets/sarviniec.jpg";
import sidinnovation from "../../Assets/sidinnovationday.jpg";
import BVCOE from "../../Assets/BVCOEhack.jpg";
import kim from "../../Assets/kimquiz.jpg";
import abhinavintern from "../../Assets/abhinavintern.png";
import dhruvintern from "../../Assets/dhruvintern.png";
import styles from "./Achievment.module.css";

const data = [
  {
    id: 0,
    title: "GSOC",
    image: gsoc,
    description:
      "We are proud to announce that our talented, Parag Gupta , has been selected for the Google Summer of Code (GSoC) 2024 program in collaboration with The Palisadoes Foundation! 🚀 This achievement highlights Parag's exceptional skills, dedication, and expertise in the field.",
    link: "https://www.linkedin.com/posts/technocrats-kiet_gsoc2024-palisadoesfoundation-congratulations-activity-7192412239918780416-S8yi?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 1,
    title: "SIH winner",
    image: sih,
    description:
      "We are thrilled to announce that three brilliant minds from our club👾 - Akshat , Anant and Shraddha have successfully made it to the Grand Finale of the prestigious Smart India Hackathon (SIH'23) 🌐💻 ",
    link: "https://www.linkedin.com/posts/technocrats-kiet_codingchampions-smartindiahackathon-grandfinale-activity-7141496738128744449-if5z?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 2,
    title: "Innotech winner",
    image: innotech,
    description:
      "We are very happy to announce that our club members Anshika Gupta , Anoushka Goel , Harsh Verma has secured the 1st prize in Category Innovation Education & Skill Development at the INNOTECH 2023",
    link: "https://www.linkedin.com/posts/technocrats-kiet_technocratstriumph-innotechwinners-teamkalakar-activity-7142185031585767424-1UxH?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 3,
    title: "NASA space apps challenge winner",
    image: nasaspaceapp,
    description:
      "We are elated to share the incredible news of one of our members, Ritik Bhatt and his team 'ByteBuster' on having achieved a remarkable feat at this year's NASA Space Apps Challenge. Proud in his actions, the results emerged with his presentation marking for him to be the First Runner-Up!",
    link: "https://www.linkedin.com/posts/technocrats-kiet_nasa-spaceappschallenge2k23-firstrunner-activity-7117823077727547392-PO0l?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 4,
    title: "IEEE winner",
    image: ieee,
    description:
      "🏆 Exciting News! Thrilled to share that my Team Binary Bharat emerged as champions in the recent IEEE Council-organized hackathon at Manipal University Jaipur! ",
    link: "https://www.linkedin.com/posts/pranshuandroiddev_hackathonchampions-teamworkmakesthedreamwork-activity-7124309655408758784-HDX-?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 5,
    title: "IIIT Allahabad hackathon winner",
    image: allahabadevent,
    description:
      "We are happy to share that TECHNOCRATS MEMBERS have secured the FIRST position 🥇 at the prestigious Mahakumbh Hackathon held at IIIT Allahabad! A huge round of applause to Raunak Seth, Utkarsh Shukla , Aditya Mishra , and Manas Tripathi for their remarkable achievement.🎉",
    link: "https://www.linkedin.com/posts/technocrats-kiet_hackathon-innovation-teamwork-activity-7201082584502525952-_ZiG?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 6,
    title: "KODE KOMBAT winner ",
    image: kodekombat,
    description:
      "🎉 Thrilled to announce that I emerged as a winner 🏆 in Kode Kombat 3.0 which is recently organized by Kinesis Technical Society 🎉The contest is totally based on Competitive programming including the major concepts of Data Structures and Algorithms which helped me to learn new things and enhance my problem solving things.",
    link: "https://www.linkedin.com/posts/archit-agarwal-8a47a2213_problemsolving-competitiveprogramming-dsa-activity-7198544862223241216-MfZO?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 6,
    title: "Ideatex winner ",
    image: ideatex,
    description:
      "🏆 Secured 2nd at @IDEATEX organized by @E-CELL KIET Group of Institutions and also got a chance to meet industry veterans like Parikh Jain and Mukesh Kumar Bansal , who have over a decade of experience, can be incredibly insightful. It's a great opportunity to learn from their wealth of knowledge and expertise in the field.",
    link: "https://www.linkedin.com/posts/wait-work_ideatex-ecell-innovation-activity-7134440901556224000-oDWe?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 6,
    title: "NIT Patna Hackathon winner ",
    image: nitpatna,
    description:
      "Celebrating a significant milestone achieved alongside Sarvin Shrivastava, Nayni Singhal and Chaitany Saini at Pitchtember, National Institute of Technology , Patna ! Team Realityhex Secured 2nd place in our track and landed 3rd prize 🏆, marking a pivotal moment. ",
    link: "https://www.linkedin.com/posts/wait-work_pitchtembersuccess-nitpatnainnovation-milestoneunlocked-activity-7150678988489707521-jbMo?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 6,
    title: "INNOVATION Day winner ",
    image: sidinnovation,
    description:
      "Thrilled to announce that I and Anshika Chhabra secured the 1st prize in the Software category at the KIET Innovation Day Challenge, April 2024! 🎉 Our innovative idea has been recognized, and we couldn't be prouder of this achievement. ",
    link: "https://www.linkedin.com/posts/siddharth-yadav-1a3ab8255_innovation-teamwork-kietchallenge-activity-7205159217186435072-w1yu?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 6,
    title: "BVCOE Hackathon winner ",
    image: BVCOE,
    description:
      "I am thrilled to announce that our team has clinched the second runner-up position at the prestigious Hult Prize BVCOE Hackathon! 🌟 It was an incredible journey filled with innovation, collaboration, and dedication. I'm immensely proud of our team's hard work and perseverance throughout the competition.",
    link: "https://www.linkedin.com/posts/raj-singh-5222a5295_hultprize-bvcoe-hackathon-activity-7167849282341994496-jkWk?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 6,
    title: "KIM online contest winner ",
    image: kim,
    description: "description",
    link: "https://unstop.com/competitions/kirit-40-kirloskar-institute-of-management-kim-852976/online-quiz/285636",
  },
  {
    id: 6,
    title: " BVP Inc. Ideathon winner",
    image: techsamurai,
    description:
      "Team Samurai from the Technocrats Club emerged victorious at the BVP Inc. Ideathon, claiming 1st runners-up! 🚀 Tasked with real-world challenges, Jiya Gupta , Raj Singh , Jhalak Jain , and Ashutosh Mishra showcased exceptional creativity and critical thinking.",
    link: "",
  },

  {
    id: 6,
    title: "AR/VR Intern @NEC Corporation",
    image: sarvinnec,
    description:
      "I am thrilled to announce that I have joined NEC Corporation India Pvt Ltd. as an intern. This is a fantastic opportunity for me to learn and grow in such a prestigious organization, and I am incredibly grateful for this chance.",
    link: "https://www.linkedin.com/posts/sarvin-shrivastava-493b20176_internship-neccorporationindia-careerjourney-activity-7211050452602273792-KLQU?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 7,
    title: "App Dev Intern @Business Incubator TBI-KIET",
    image: abhinavintern,
    description:
      "Abhinav Singh is an Application Development Intern at TBI-KIET, focusing on leveraging Flutter to create user-friendly multi-platform applications tailored to startup needs. His role involves developing scalable solutions and addressing diverse software modules to support startup growth and innovation.",
    link: "https://www.linkedin.com/posts/sarvin-shrivastava-493b20176_internship-neccorporationindia-careerjourney-activity-7211050452602273792-KLQU?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 8,
    title: "Flutter Intern at @Ostello India Pvt Ltd",
    image: dhruvintern,
    description:
      "Dhruv Sharma completed a Flutter Internship at Ostello India Pvt Ltd, starting on May 25, 2024. He contributed to real-time feature development, optimized Dart code, managed end-to-end design, integrated RESTful APIs, facilitated agile development, and ensured secure payment gateway setups, addressing UI and backend challenges with seamless API integration.",
    link: "https://www.linkedin.com/in/dhruv-sharma-a3a94a256/",
  },
];
const Achievment = () => {
  return (
    <div className={styles.achvcardgpa}>
      <div className={styles.achvcardpa}>
        {data.map((pop) => {
          return (
            <AchievmentCard
              title={pop.title}
              image={pop.image}
              description={pop.description}
              link={pop.link}
            />
          );
        })}
      </div>
    </div>
  );
};

const Icon1 = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
      />
    </svg>
  );
};

const AchievmentCard = ({ title, image, description, link }) => {
  return (
    <div className={styles.achvcardwrapper} id="achievesection">
      <div className={styles.achvtitlebox}>
        <div className={styles.achvtitle}>{title}</div>

        <a href={link} target="_blank">
          <div className={styles.achvicon}>
            <Icon1 />
          </div>
        </a>
      </div>

      <div>
        <img src={image} alt={title} />
      </div>

      <div className={styles.achvboxdesc}>{description}</div>
    </div>
  );
};

export default Achievment;
