import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import clubIcon from "../../Assets/clubIcon.png";
import { FcMenu } from "react-icons/fc";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import OnlineUsers from "../Countop";
import PresenceTracker from "../Countop";
import OnlineUserCount from "../Countpre";

const Header = () => {
  const [Open, setOpen] = useState(false);
  const [Visible, setVisible] = useState(false);

  const upMenu = () => {
    setOpen(!Open);
  };
  const autoclose = () => {
    if (Open === true) {
      setOpen(false);
    }
  };
  useEffect(() => {
    if (window.innerWidth <= 700) {
      setVisible(true);
    } else {
      setVisible(false);
      setOpen(false);
    }
    const handleResize = () => {
      setVisible(window.innerWidth <= 700);
      setOpen(false);
    };

    window.addEventListener("resize", handleResize);

    // Screen increase --> menu Remove
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const [navcss,setnavcss] = useState({});

  return (
    <div className={styles.nav_container}>
      <img src={clubIcon} className={styles.club_icon_img} alt="logoicon"></img>

      <div
        className={`${!Visible ? styles.link_container : styles.close_menu} ${
          Open ? styles.mobile_view : ""
        }`}
      >
        <div
          style={{
            border: "2px solid grey",
            borderRadius: "5px",
            margin: "10px",
          }}
          className={`${styles.ham_menu} ${Visible ? "" : styles.close_menu}`}
          onClick={upMenu}
        >
          <RxCross2
            style={{ marginTop: "12px", borderBottom: "2px solid grey" }}
            className={styles.close_icon}
            size={30}
            color="white"
          />
        </div>
        <Link
          to="/"
          onClick={autoclose}
          className={`${Open ? styles.nav_mobile_view : ""} ${styles.nav_link}`}
        >
          Home
        </Link>
        <Link
          to="/team"
          onClick={autoclose}
          className={`${Open ? styles.nav_mobile_view : ""} ${styles.nav_link}`}
        >
          Team
        </Link>
        <Link
          to="/event"
          onClick={autoclose}
          className={`${Open ? styles.nav_mobile_view : ""} ${styles.nav_link}`}
        >
          Event
        </Link>
        <Link
          to="/achievement"
          onClick={autoclose}
          className={`${Open ? styles.nav_mobile_view : ""} ${styles.nav_link}`}
        >
          Achievement
        </Link>
        <Link
          to="/resource"
          onClick={autoclose}
          className={`${Open ? styles.nav_mobile_view : ""} ${styles.nav_link}`}
        >
          Resources
        </Link>
        <Link
          to="/about"
          onClick={autoclose}
          className={`${Open ? styles.nav_mobile_view : ""} ${styles.nav_link}`}
        >
          About
        </Link>

        {/* styles.nav_link */}

        {Open ? (
          <a href="https://chat.whatsapp.com/Gi9OoTWITrnCPd6URsgQFj">
            {" "}
            <button
              className={`${Open ? styles.join_mobile : styles.close_menu}`}
            >
              Join Us
            </button>
          </a>
        ) : (
          ""
        )}
      </div>

      <a href="https://chat.whatsapp.com/Gi9OoTWITrnCPd6URsgQFj">
        {" "}
        <button className={styles.joinbtn}>Join Us</button>
      </a>

      <div
        className={`${styles.ham_menu} ${Visible ? "" : styles.close_menu}`}
        onClick={upMenu}
      >
        <FcMenu size={30} />
      </div>

     

    </div>
  );
};

export default Header;
