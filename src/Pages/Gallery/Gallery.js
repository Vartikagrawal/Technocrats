import React from 'react'
import styles from './Gallery.module.css'
import glimpse1 from '../../Assets/glimpse/glimpse1.png'
import glimpse2 from '../../Assets/glimpse/glimpse2.png'
import glimpse3 from '../../Assets/glimpse/glimpse3.png'
import glimpse4 from '../../Assets/glimpse/glimpse4.png'
import glimpse5 from '../../Assets/glimpse/glimpse5.png'
import Gallerycard from '../../Components/GalleryCard/Gallerycard'
const imgdata = [
  {
    name:"aryan",
    img:glimpse1
  },
  {
    name:"aryan",
    img:glimpse5
  }
  , {
    name:"aryan",
    img:glimpse4
  }, {
    name:"aryan",
    img:glimpse3
  } ,{
    name:"aryan",
    img:glimpse2
  }
]
const Gallery = () => {
  return (
    <div className={styles.testimonial_wrapper} id="gallery_here">
    <div className={styles.bgname}> GALLERY</div>
    <div className={styles.test_text}>
    A Glimpse of Our  <div>Vision</div> </div>
<div className={styles.imagecontainer}>
{imgdata.map((e)=><Gallerycard key={e.img} image={e.img}/>)}
</div>
{/* <button className={styles.gall_btn}>Show More</button> */}
  </div>
  )
}

export default Gallery
