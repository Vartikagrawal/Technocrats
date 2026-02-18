import React from "react";
import linkedin from "../Assets/linkedin.png";
import insta from "../Assets/insta.png";

const Card = ({ instagram, linkedin_link, name, image }) => {
  return (
    <div>
      <div class="bg-transparent w-72">
        <div class="">
          <img src={image} alt={name} className="rounded-lg w-full" />
        </div>

        <div className="text-white py-5 text-2xl  justify-start ">{name}</div>
        <div className="flex justify-around ">
          <a href={instagram}>
            <div className="w-10">
              <img src={insta} alt="" />
            </div>
          </a>

          <a href={linkedin_link}>
            <div className="w-10">
              <img src={linkedin} alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
