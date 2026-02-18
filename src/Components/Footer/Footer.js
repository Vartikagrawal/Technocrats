import React from "react";
import styles from "./Footer.module.css";
import { FaInstagram, FaLinkedinIn,FaTwitter, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer_wrapper}>


      <div className={styles.footer_container}>

<div className={styles.footer_links}>
  <a href="/" className={styles.footer_link}>Home</a>
  <a href="/about" className={styles.footer_link}>About Us</a>
  <a href="/resource" className={styles.footer_link}>Resource</a>

   <div className={styles.footer_social}>
    <a href="https://www.instagram.com/technocrats.kiet/" target="_blank" rel="noreferrer" className={styles.social_icon}>
      <FaInstagram />
    </a>
    <a href="https://www.linkedin.com/company/technocrats-kiet/" target="_blank" rel="noreferrer" className={styles.social_icon}>
      <FaLinkedinIn />
    </a>
    <a href="https://x.com/Technocrats_?t=lzevmiGsTKuZHYumdZkKIA&s=08" target="_blank" rel="noreferrer" className={styles.social_icon}>
      <FaTwitter />
    </a>
  </div>
</div>

<div className={styles.footer_links}>
  <a href="/event" className={styles.footer_link}>Event</a>
  <a href="/achievement" className={styles.footer_link}>Achievement</a>
  <a href="/team" className={styles.footer_link}>Meet Our Team</a>
  <a href="mailto:technocrats@kiet.edu" className={styles.contact_item}>
            <FaEnvelope className={styles.contact_icon} />
            technocrats@kiet.edu
          </a>
</div>

        <div className={styles.map_container}>
          <iframe
            title="KIET Group of Institutions Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.7890067539!2d77.49538!3d28.7495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1b7b4bf77a9%3A0x3b55e1ae7ad91abb!2sKIET%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>

      <div className={styles.footer_bottom}>
        <span>© 2026 Technocrats</span>
        <span>Designed by Technocrats Tech Team</span>
      </div>

    </footer>
  );
};

export default Footer;