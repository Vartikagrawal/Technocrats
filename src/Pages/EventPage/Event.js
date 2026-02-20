import React from "react";
import "./event.css";
import DomainCard from "../../Components/Domaincard/Domaincard";
import { Link } from "react-router-dom";
import websitelaunch1 from "../../Assets/website-launch.jpg";
import sangam1 from "../../Assets/sangam1.jpg";
import techno1 from "../../Assets/techno1.jpg";
import career1 from "../../Assets/careerguide1.jpg";
import ing1 from "../../Assets/Inga1.jpg";
import hackers1 from "../../Assets/hh1.jpg";
import innotech1 from "../../Assets/Innotech1.JPG.jpeg";
import technoverse1 from "../../Assets/technoverse1.jpeg";
import foundationday from "../../Assets/foundation1.jpeg"
import uiux1 from "../../Assets/uiux1.jpeg"
import ml1 from "../../Assets/ml1.png"



const data = [
  {
    name:"Inauguration Ceremony",
    img:ing1,
  },
  {
    name: "Technocrats Website",
    addon: "date here ",
    img: websitelaunch1,
  },
  {
    name: "WEB 3 SANGAM",
    addon: "date here ",
    img: sangam1,
  },
  {
    name: "Technoverse",
    addon: "date here ",
    img: techno1,
  },
  {
    name: "Career Guidance",
    addon: "date here ",
    img: career1,
  },
  {
    name: "THE HACKER'S MEETUP",
    addon: "date here ",
    img: hackers1,
  },
  {
    name:"Organised Innotech'25",
    img:innotech1,
  },
  {
    name:"Technoverse 2.0",
    img:technoverse1,
  },
  {
    name:"2nd foundation day",
    img:foundationday,
  },
  {
    name:"UI/UX Bootcamp",
    img:uiux1,
  },{
    name:"Machine Learning Bootcamp",
    img:ml1,
  }
];

const Event = () => {
  return (
    <div className="domain_wrapper">
      <div className="bgname">Events</div>
      <div className="test_text">
        Highlighted Upcoming <div>Milestones </div>{" "}
      </div>
      <div className="domain_container">
        {data.map((event) => (
          <Link
            key={event.name}
            style={{ textDecoration: "none" }}
            to={`/hackers/${encodeURIComponent(event.name)}`}
          >
            <DomainCard addon={event.addon} name={event.name} img={event.img} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Event;
