import React from "react";
import styles from "./Domain.module.css";
import Domaincard from "../../Components/Domaincard/Domaincard";
// import ml from '../../Assets/ml.jpg'
import and from "../../Assets/android.png";
import webd from "../../Assets/webdev.png";
import cyber from "../../Assets/cybersecurity-card.png";
import meta from "../../Assets/arvr.png";
import graphic from "../../Assets/graphics.png";
import ml from "../../Assets/ml.png";
import coding from "../../Assets/coding.png"
import content from "../../Assets/cyber.png"
const data = [
  {
    name: "Web Development",
    addon: "",
    data: "Examined as an existence in the soul of the Internet age, Web Development is a professional field which has helped the world envision numerous aspects of E-shopping, E-transition and many more ",
    img: webd,
  },
  {
    name: "Machine Learning",
    addon: "",
    data: "this is a web development ... ",
    img: ml,
  },
  {
    name: "Android Development",
    addon: " ",
    data: "this is a web development ... ",
    img: and,
  },
  {
    name: "AR/VR",
    addon: "",
    data: "this is a web development ... ",
    img: meta,
  },
  {
    name: "CyberSecurity",
    addon: "",
    data: "this is a web development ... ",
    img: cyber,
  },
  {
    name: "UI/UX",
    addon: " ",
    data: "this is a web development ... ",
    img: graphic,
  },
  {
    name: "Content Writing",
    addon: "",
    data: "this is a web development ... ",
    img: content,
  },
  {
    name: "CP/DSA",
    addon: " ",
    data: "this is a web development ... ",
    img: coding,
  },
];
const Domain = () => {
  return (
    <div className={styles.domain_wrapper} id="domains_here">
      <div className={styles.bgname}>DOMAINS</div>

      <div className={styles.domain_text}>
        An Insight of Our Versatile
        <div> Domains</div>{" "}
      </div>

      <div className={styles.domain_container}>
        {data.map((e) => (
          <Domaincard
            addon={e.addon}
            key={e}
            name={e.name}
            img={e.img}
            data={e.data}
          />
        ))}
      </div>
    </div>
  );
};

export default Domain;
