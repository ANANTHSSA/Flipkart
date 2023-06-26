import React, { useContext, useEffect, useState } from 'react'
import '../../Sass/Sass.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 
import Bannerimg from '../Banner/images/banner.jpg';
import Bannerimg1 from '../Banner/images/banner1.jpg';
import Bannerimg2 from '../Banner/images/banner2.jpg';
import Bannerimg3 from '../Banner/images/banner3.jpg';



export function Banner  ()  {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
return (
    <>
    <Carousel responsive={responsive}>
     <div className='card'>
      <a href='#'>
      <img src={Bannerimg}/>
      </a>
      </div>
      <div className='card'>
      <a href='#'>
      <img src={Bannerimg1}/>
      </a>
      </div>
      <div className='card'>
      <a href='#'>
      <img src={Bannerimg2}/>
      </a>
      </div>
      <div className='card'>
      <a href='#'>
      <img src={Bannerimg3}/>
      </a>
      </div>
        </Carousel>
    </>
  )
  }


export default Banner
