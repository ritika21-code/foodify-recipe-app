import React from 'react'

function Footer() {
  return (
    <div className='footer container'>
        <div className='footsection'>
        <p className="title">Foodify.com</p>
                <p>Foodify is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free.</p>
                <p>&copy; 2022 | All Rights Reserved</p>
            </div>
            <div className="footsection">
                <p className="title">Contact Us</p>
                <p>Foodify@gmail.com</p>
                <p>+91 9812345677</p>
                <p>New Delhi</p>
            </div>
            <div className="footsection">
                <p className="title">Socials</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
        </div>
    </div>
  )
}

export default Footer