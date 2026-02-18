import React from 'react'
import styles from './Testimonial.module.css'
import Testicard from '../../Components/Testicard/Testicard'
import ayush from '../../Assets/team/ayush.jpg'
import Saumya from '../../Assets/team/saumya.jpeg.jpg'
import anshul from '../../Assets/team/Aanshul.jpeg.jpg'
import anuj from '../../Assets/team/anuj.jpeg'
import anu from "../../Assets/AnuSharma.png"
import shreyansh from "../../Assets/shreyanshshukla.jpg"
import supriya from "../../Assets/SupriyaPurohit.png"
import harsh from "../../Assets/HarshVardhan.png"
import sanchay from "../../Assets/SanchaySingh.png"

const data = [{
    name:"Ayush Singh",
    role:"Senior Data Scientist",
    img:ayush,
    desc: " I help data science learners grab high paying jobs and first pay checks | Experience at Replayed, ZenML, & Artifact",
    twitter:"https://x.com/AySh2218?t=h3YUEDp5mIcbKJQ6MWv2rQ&s=08",
    linkedin:"https://www.linkedin.com/in/ayush-singh488",
    instagram:""
},
{
    name:"Saumya Singh",
    role:"Red Hat",
    img:Saumya,
    desc:"Software Engineer helping you excel in Tech & Life | International Open Source Award finalist | Educator | Google Connect Winner'19 | Scholar GHCI'20 | Winner SIH, 21U21 Award",
    twitter:"https://x.com/saumya1singh?t=XUe5_gL1aSTyMwig7tR1Qg&s=08",
    linkedin:"https://www.linkedin.com/in/saumya1singh",
    instagram:""
},
{
    name:"Aanshul Sadaria",
    role:"Google",
    img:anshul,
    desc:"SWE III @ Google | Institute Gold Medalist @ IIITH | First Inventor @ Adobe | Ex-Researcher @ Precog | Mentored 1000+ Students | Speaker at 50+ Events",
    twitter:"https://x.com/AanshulSadaria?t=ZQ3J5Cs2_32Ev6t_sLdp3A&s=08",
    linkedin:"https://www.linkedin.com/in/aanshulsadaria"
}
,{
    name:"Ajay Suneja",
    role:"Adidas",
    img:anuj,
    desc:"Frontend Developer at @adidas | Ex- ITC Infotech | Ex- Coforge (NIIT) | GDSC’23 & Postman’23 Speaker ",
    twitter:"https://x.com/TechnicalSuneja?t=bxB7mCcPth0tJZZKvNkmOA&s=08",
    linkedin:"https://www.linkedin.com/in/ajaysuneja",
  instagram:""}
,
{
  name:"Anu Sharma",
  role:"Google, Twitter",
  img:anu,
  desc:"Worked @google, @twitter, @intuit • making tech and AI ridiculously simple •TEDx speaker • 500K+ community on social media • featured on NDTV, Times, Business Insider, Times Square",
  twitter:"https://x.com/O_Anu_O",
  linkedin:"https://www.linkedin.com/in/anu-sharma-2002/",
instagram:""}
,{
  name:"Supriya Purohit",
  role:"Flipkart",
  img:supriya,
  desc:"Product & Tech | Ex-Flipkart & GoTo (Citrix)| Speaker at IITs/MIT/Amity/BIT | Product Management Cohort Instructor",
  twitter:"https://x.com/SupriyaPurohitt",
  linkedin:"https://www.linkedin.com/in/supriyapurohit27/",
instagram:""},{
  name:"Harsh Vandana Sharma",
  role:"Founder & CEO, Sheryians",
  img:harsh,
  desc:"Founder & CEO, Sheryians",
  twitter:"https://x.com/harshbhaiyaa",
  linkedin:"https://www.linkedin.com/in/harshvandanasharma/",
instagram:""},{
  name:"Sanchay Singh",
  role:"Founder & CEO, Sheryians",
  img:sanchay,
  desc:"Founder of HackersVilla & CyberSangam Community | Cybersecurity Expert | Corporate Trainer | Public Speaker",
  twitter:"https://x.com/OfficialSanchay",
  linkedin:"https://www.linkedin.com/in/sanchayofficial/",
instagram:""},

{
  name:"Shreyansh Shukla",
  role:"Amazon",
  img:shreyansh,
  desc:"SDE @Amazon | Competitive Programmer",
  twitter:"",
  linkedin:"https://www.linkedin.com/in/shreyansh-shukla-38842b187/",
instagram:""}
]
const Testimonial = () => {
  return (
    <div className={styles.testimonial_wrapper}>
      <div className={styles.bgname}> SAY'S</div>
      <div className={styles.test_text}>
       Experience Our Excellence <div>Through Testimonials</div> </div>
<div className={styles.testimonial_container}>
  {data.map((e)=><Testicard key={e.name} desc={e.desc} img={e.img} role={e.role} name={e.name } linkedin={e.linkedin} instagram={e.instagram} twitter={e.twitter}/>)}
</div>

    </div>
  )
}

export default Testimonial
