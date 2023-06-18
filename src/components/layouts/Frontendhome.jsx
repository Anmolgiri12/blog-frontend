import React from "react";
import {Carousel} from 'react-responsive-carousel'
import img1 from '../img/lakes.jpg'
import img2 from '../img/culture.jpg'
import img3 from '../img/tiger.jpg'
import img4 from '../img/mountain.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function HomeComponent() {
  return(
<div className="slider">
<Carousel 
infiniteLoop 
autoPlay 
showThumbs={false} 
showStatus={false} 
showArrows={false} 
interval={2000}>

<div>
  <img className="caro_home" src={img1} alt="" />
  <p className="legend">Natural Beautiful lakes</p>
</div>
<div>
  <img className="caro_home"  src={img2} alt="" />
  <p className="legend">Fasinating cultural beauty</p>
</div>
<div>
  <img className="caro_home"  src={img3} alt="" />
  <p className="legend">Wild on Wild</p>
</div>
<div>
  <img className="caro_home"  src={img4} alt="" />
  <p className="legend">Beautiful peaks for life</p>
</div>

</Carousel>

</div>
  )
  
}