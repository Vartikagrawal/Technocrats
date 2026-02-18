import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Hackers.css";
import websitelaunch1 from "../../Assets/website-launch.jpg";
import websitelaunch2 from "../../Assets/websitelaunch2.jpg";
import websitelaunch3 from "../../Assets/websitelaunch3.jpg";
import websitelaunch4 from "../../Assets/websitelaunch4.jpg";
import hackers1 from "../../Assets/hh1.jpg";
import hackers2 from "../../Assets/hackersmeetup2.jpg";
import hackers3 from "../../Assets/hackersmeetup3.jpg";
import hackers4 from "../../Assets/hackersmeetup4.jpg";
import hackers5 from "../../Assets/hackersmeetup5.jpg";
import sangam1 from "../../Assets/sangam1.jpg";
import sangam2 from "../../Assets/sangam2.jpg";
import sangam3 from "../../Assets/sangam3.jpg";
import sangam4 from "../../Assets/sangam4.jpg";
import sangam5 from "../../Assets/sangam5.jpg";
import techno1 from "../../Assets/techno1.jpg";
import techno2 from "../../Assets/techno2.jpg";
import techno3 from "../../Assets/techno3.jpg";
import techno4 from "../../Assets/techno4.jpg";
import techno5 from "../../Assets/techno5.jpg";
import career1 from "../../Assets/careerguide1.jpg";
import career2 from "../../Assets/careerguide2.jpg";
import career3 from "../../Assets/careerguide3.jpg";
import career4 from "../../Assets/careerguide4.jpg";
import career5 from "../../Assets/careerguide5.jpg";
import ing1 from "../../Assets/Inga1.jpg";
import ing2 from "../../Assets/Inga2.jpg";
import ing3 from "../../Assets/Inga3.jpg";
import ing4 from "../../Assets/Inga4.jpg";

const data = [
  {
    name: "Inauguration Ceremony",
    description:
      "We are excited to introduce TECHNOCRATS, a club that embodies the essence of opportunities and continuous learning at its core.Our vision is to become a premier platform that nurtures technological innovation, creativity, and leadership among the KIETians. On the momentous day of 18th July 2023, we officially launched our club, graced by the esteemed presence of our Director, our Dean of Academics, HOD CSIT, and our esteemed faculty members.We take pride in the valuable guidance provided by our industry mentors, who bring expertise from leading tech companies. With their support, TECHNOCRATS aims to foster a community of tech enthusiasts, empowering each member to explore and excel in the world of technology.Let's embark on this exciting journey together, united by our passion for innovation and growth!",
    image1: ing1,
    image2: ing2,
    image3: ing3,
    image4: ing4,
  },
  {
    name: "Technocrats Website",
    addon: "date here ",
    description:
      "On this day, we are thrilled to announce the launch of the Technocrats Club website! Our platform is dedicated to students passionate about web development, augmented reality, Android development, machine learning, and competitive programming. The website features a wealth of resources, including tutorials, project showcases, and a dedicated section for collaborative projects. Members can participate in forums, attend virtual classes, and stay updated with our events and hackathons. This launch marks a significant milestone in our journey to build a vibrant community of tech enthusiasts, committed to learning, innovation, and excellence.",
    image1: websitelaunch1,
    image2: websitelaunch2,
    image3: websitelaunch3,
    image4: websitelaunch4,
  },
  {
    name: "WEB 3 SANGAM",
    addon: "date here ",
    description:
      "Immerse yourself in the captivating world of Web 3.0 at the Web 3 Sangam event, exploring the latest trends and developments in the decentralized web.Whether you're a developer, investor, or simply curious about the future of the internet, this event is for you. Let's shape the future of Web 3.0 together!t",
    image1: sangam2,
    image2: sangam2,
    image3: sangam1,
    image4: sangam4,
  },
  {
    name: "Technoverse",
    addon: "date here ",
    description:
      "Reflecting on the inspiring Technoverse event on April 23rd, 2024! 🚀 We hosted distinguished speakers who shared invaluable insights into technology. Akshay Saini 🚀, a web development expert, motivated us with quotes that have shaped his journey, inspiring resilience and determination. 💪 Keerti Purswani emphasized the importance of communication skills in the tech industry, highlighting how effective communication fosters collaboration and innovation. 🗣️Supriya Purohit shared her personal journey, teaching us about perseverance and staying focused on goals despite adversity. 💡",
    image1: techno1,
    image2: techno2,
    image3: techno3,
    image4: techno4,
  },
  {
    name: "Career Guidance",
    addon: "date here ",
    description:
      "🌟 Club Spotlight: Inspiring Minds Through Technology 🌟 We are thrilled to spotlight Harveer Narwar, Shaiz Yousufzai, Radhika Gupta, and Panika Gupta, who have made a meaningful impact on young minds. Their recent visits to local schools aimed to inspire and educate students about the exciting world of technology.These visits were transformative, leaving lasting impressions on both the club members and students. They shared insights into the latest tech trends, sparking curiosity and passion. Their presence brought enthusiasm and created memorable moments.Their profound message emphasized that embracing technology is key to building a stronger, more prosperous nation. Believing in oneself and positively impacting others are the core values driving our club's mission.",
    image1: career1,
    image2: career2,
    image3: career3,
    image4: career4,
  },
  {
    name: "Inaugration",
    addon: "date here ",
    image1: techno1,
    image2: techno2,
    image3: techno3,
    image4: techno4,
  },
  {
    name: "THE HACKER'S MEETUP",
    addon: "date here ",
    description:
      "Hackers Meet up can refer to various gatherings of hackers and cybersecurity enthusiasts. The most prominent one is The Hacker's Meetup, a series of monthly events in India focused on sharing knowledge and building community around vulnerability research, ethical hacking, and security awareness. Other possibilities include local meetups, online forums, and platform-specific events.",
    image1: hackers1,
    image2: hackers2,
    image3: hackers3,
    image4: hackers4,
  },
];

const Hackers = () => {
  const { name } = useParams();

  const event = data.find((event) => event.name === name);

  if (!event) {
    return <div>Event not found!</div>;
  } else {
    return (
      <div>
        <div class="test_textevent">{event.name}</div>
        <div className="eventcardhead">
          <div className="eventcardheading">
            <img src={event.image1} alt={event.name} className="eventheadimage1" />
          </div>
          <div className="eventcardheadtext">{event.description}</div>
        </div>

        <div class="image-container">
          <div class="image-item">
            <img src={event.image1} class="rounded-md" alt="{event.name}" />
          </div>
          <div class="image-item">
            <img src={event.image2} class="rounded-md" alt="{event.name}" />
          </div>
          <div class="image-item">
            <img src={event.image3} class="rounded-md" alt="{event.name}" />
          </div>
          <div class="image-item">
            <img src={event.image4} class="rounded-md" alt="{event.name}" />
          </div>
        </div>
      </div>
    );
  }
};

export default Hackers;
