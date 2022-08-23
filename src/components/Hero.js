import React from 'react'
import {Link} from "react-router-dom"
import Customimage from './Customimage'
function Hero() {
  const imag = [
    "/images/img1.webp",

    "/images/img3.jpg",
    "./images/img4.jpg",
    "./images/img5.jpg",
    "./images/img6.jpg",
    "./images/img7.jpg",
    "./images/img8.webp",
    "./images/img9.jpg",
    "./images/img2.jpg",
  ]
  return (

    <div className='section hero'>
      <div className='col typography'> <h1 className='title'>
        What Are We About
      </h1>
        <p className="info">Foodify is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free. So start exploring now.</p>
        
        <Link to="/recipes">
          <button className='btn'>EXPLORE NOW</button></Link></div>

      <div className='col gallery'>
        {imag.map((src, index) => (
          <Customimage key={index} imgsrc={src} pt={"90%"} />
        ))}

      </div>                         
    </div>
  )
}

export default Hero