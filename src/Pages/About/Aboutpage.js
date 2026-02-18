import React from 'react'
import styles from './Aboutpage.module.css'
import Aboutdetcard from '../../Components/Aboutdetcard/Aboutdetcard'
const data= [{
  name:"Meetup",
  data:"Dedicated towards hosting significant technological meetups in collaboration with a creative bent of innovative enthusiasm, Technocrats has been crafted to become a platform where exchange of knowledge gets accompanied by a networked deliberation."
},
{
  name:"Mentorship",
  data:"Renowned to be a prodigal ally concerned with faithful relevance in experience, a mentor is an influential body for any organization. Reflecting upon which, Technocrats has described its industrial optimism by introducing the concept of mentorship in the club, where the members can directly interact with their mentors to clear their queries while seeking for advices."
},
{
  name:"BootCamps",
  data:"Imagine a world where your dreams and goals are just a click away. With our innovative app, you can unlock endless possibilities and make your aspirations a reality. Join our community of achievers and experience a brighter future at your fingertips. Download the app today and step into a world of limitless potential"
}]
const Aboutpage = () => {
  return (
    <div className={styles.testimonial_wrapper}>
    <div className={styles.bgname}> About</div>
    <div className={styles.test_text}>
    The Optimism in   Our Origination{" "}
    </div>
    <div className={styles.about_content}>Mapped out as a group of passionate tech enthusiasts committed towards sharing knowledge and expertise in the world of technology, the team of Technocrats views itself in the pursuit of demystifying the complexities of the digital realm, inspiring innovation, and empowering individuals and businesses in thriving in an ever-evolving tech landscape.
</div >
<div className={styles.about_card_container}> {data.map((e)=><Aboutdetcard name={e.name} data = {e.data} />)}</div>
   
  </div>
  )
}

export default Aboutpage
