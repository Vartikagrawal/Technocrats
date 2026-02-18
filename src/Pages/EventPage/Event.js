import React from "react";
import "./event.css";
import DomainCard from "../../Components/Domaincard/Domaincard";
import { Link } from "react-router-dom";
import technoverse from "../../Assets/technoverse.jpg";
import sangam from "../../Assets/sangamposter.jpg"
import websitelaunch1 from "../../Assets/website-launch.jpg";
import sangam1 from "../../Assets/sangam1.jpg";
import techno1 from "../../Assets/techno1.jpg";
import career1 from "../../Assets/careerguide1.jpg";
import ing1 from "../../Assets/Inga1.jpg";
import hackers1 from "../../Assets/hh1.jpg";




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
