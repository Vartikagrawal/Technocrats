import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Hackers.css";
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

import inno1 from "../../Assets/Innotech1.JPG.jpeg";
import inno2 from "../../Assets/innotech2.jpeg";
import inno3 from "../../Assets/innotech3.jpeg";
import inno4 from "../../Assets/innotech4.jpeg";

import technoverse1 from "../../Assets/technoverse1.jpeg";
import technoverse2 from "../../Assets/technoverse2.jpeg";
import technoverse3 from "../../Assets/technoverse3.jpeg";
import technoverse4 from "../../Assets/technoverse4.jpeg";

import foundation1 from "../../Assets/foundation1.jpeg";
import foundation2 from "../../Assets/foundation2.jpeg";

import uiux1 from "../../Assets/uiux1.jpeg";
import uiux2 from "../../Assets/uiux2.jpeg";

import ml1 from "../../Assets/ml1.png";
import ml2 from "../../Assets/ml2.jpeg";
import ml3 from "../../Assets/ml3.jpeg";
import ml4 from "../../Assets/ml4.jpeg";

const data = [
  {
    name: "Inauguration Ceremony",
    description:
      "We are excited to introduce TECHNOCRATS, a club that embodies the essence of opportunities and continuous learning at its core. Our vision is to become a premier platform that nurtures technological innovation, creativity, and leadership among the KIETians. On the momentous day of 18th July 2023, we officially launched our club, graced by the esteemed presence of our Director, our Dean of Academics, HOD CSIT, and our esteemed faculty members. We take pride in the valuable guidance provided by our industry mentors, who bring expertise from leading tech companies.",
    images: [ing1, ing2, ing3, ing4],
  },
  {
    name: "Technocrats Website",
    description:
      "On this day, we are thrilled to announce the launch of the Technocrats Club website! Our platform is dedicated to students passionate about web development, augmented reality, Android development, machine learning, and competitive programming. The website features a wealth of resources, including tutorials, project showcases, and a dedicated section for collaborative projects.",
    images: [websitelaunch1, websitelaunch2, websitelaunch3, websitelaunch4],
  },
  {
    name: "WEB 3 SANGAM",
    description:
      "Immerse yourself in the captivating world of Web 3.0 at the Web 3 Sangam event, exploring the latest trends and developments in the decentralized web. Whether you're a developer, investor, or simply curious about the future of the internet, this event is for you. Let's shape the future of Web 3.0 together!",
    images: [sangam1, sangam2, sangam3, sangam4],
  },
  {
    name: "Technoverse",
    description:
      "Reflecting on the inspiring Technoverse event on April 23rd, 2024! We hosted distinguished speakers who shared invaluable insights into technology. Akshay Saini, a web development expert, motivated us with quotes that have shaped his journey. Keerti Purswani emphasized the importance of communication skills in the tech industry. Supriya Purohit shared her personal journey, teaching us about perseverance and staying focused on goals despite adversity.",
    images: [techno1, techno2, techno3, techno4],
  },
  {
    name: "Career Guidance",
    description:
      "We are thrilled to spotlight Harveer Narwar, Shaiz Yousufzai, Radhika Gupta, and Panika Gupta, who have made a meaningful impact on young minds. Their recent visits to local schools aimed to inspire and educate students about the exciting world of technology. These visits were transformative, leaving lasting impressions on both the club members and students.",
    images: [career1, career2, career3, career4],
  },
  {
    name: "Inaugration",
    images: [techno1, techno2, techno3, techno4],
  },
  {
    name: "THE HACKER'S MEETUP",
    description:
      "Hackers Meet up can refer to various gatherings of hackers and cybersecurity enthusiasts. The most prominent one is The Hacker's Meetup, a series of monthly events in India focused on sharing knowledge and building community around vulnerability research, ethical hacking, and security awareness.",
    images: [hackers1, hackers2, hackers3, hackers4, hackers5],
  },
  {
    name: "Organised Innotech'25",
    description:
      "Innotech’25, the annual tech fest of our college organized by the Technocrats Club, was a dynamic celebration of innovation and learning. With workshops, hackathons, exhibitions, and inspiring guest talks, the event gave students a platform to showcase creativity, sharpen skills, and explore emerging technologies. It truly reflected the spirit of collaboration and positioned Technocrats as a hub of technical excellence on campus..",
    images: [inno1, inno2, inno3, inno4],
  },
  {
    name: "Technoverse 2.0",
    description:
      "Technoverse 2.0, organized by the Technocrats Club, was a dynamic technical event celebrating innovation and creativity. Featuring workshops, hackathons, and exhibitions, it provided students a platform to enhance their skills and explore emerging technologies. The event was honored by the presence of our esteemed Chief Guests, Anu Sharma and Harsh Vardhan Sharma, whose inspiring words motivated participants and made the event truly memorable.",
    images: [technoverse1, technoverse2, technoverse3, technoverse4],
  },
   {
    name: "2nd foundation day",
    description:
      "The second foundation day of Technocrats Club was a special celebration of our club's journey and achievements. It was a day filled with memories, accomplishments, and the spirit of innovation that defines our club.",
    images: [foundation1,foundation2],
  },
  {
    name: "UI/UX Bootcamp",
    description:
      "The UI/UX Bootcamp was an intensive workshop designed to introduce students to the fundamentals of user interface and user experience design. It provided hands-on training in design principles, prototyping, and usability testing, equipping participants with practical skills for creating engaging digital experiences.",
    images: [uiux1, uiux2],
  },
  {
    name: "Machine Learning Bootcamp",
    description:
      "The Machine Learning Bootcamp was an intensive workshop designed to introduce students to the fundamentals of machine learning. It provided hands-on training in data analysis, model building, and deployment, equipping participants with practical skills for creating intelligent applications.",
    images: [ml1, ml2, ml3, ml4],
  },
];

const Hackers = () => {
  const { name } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);

  const event = data.find((event) => event.name === name);

  if (!event) {
    return <div className="event-not-found">Event not found!</div>;
  }

  const images = event.images || [];
  const total = images.length;

  const prev = () => setActiveIndex((i) => (i - 1 + total) % total);
  const next = () => setActiveIndex((i) => (i + 1) % total);

  const leftIndex = (activeIndex - 1 + total) % total;
  const rightIndex = (activeIndex + 1) % total;

  return (
    <div className="event-page">
      <h1 className="event-title">{event.name}</h1>

      <div className="carousel-wrapper">
        <button className="carousel-btn carousel-btn--left" onClick={prev} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="carousel-track">

          {total > 1 && (
            <div className="carousel-slide carousel-slide--side carousel-slide--left" onClick={prev}>
              <img src={images[leftIndex]} alt={`slide-${leftIndex}`} />
              <div className="slide-overlay" />
            </div>
          )}

          <div className="carousel-slide carousel-slide--center">
            <img src={images[activeIndex]} alt={`slide-${activeIndex}`} />
            <div className="carousel-dots">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === activeIndex ? "dot--active" : ""}`}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {total > 2 && (
            <div className="carousel-slide carousel-slide--side carousel-slide--right" onClick={next}>
              <img src={images[rightIndex]} alt={`slide-${rightIndex}`} />
              <div className="slide-overlay" />
            </div>
          )}
        </div>

        <button className="carousel-btn carousel-btn--right" onClick={next} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {event.description && (
        <div className="event-description">
          <p>{event.description}</p>
        </div>
      )}
    </div>
  );
};

export default Hackers;