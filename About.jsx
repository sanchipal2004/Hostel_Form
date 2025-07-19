import React from 'react'
import Navbar from '../components/Navbar'

import './about.css'


const About = () => {

  return (
    <div >
      <div className="mx-14">
      <Navbar/></div>
      
   
      <div className="parent mx-auto m-32 ">
      <div className="card">
        <div className="logo">
          <span className="circle circle1" />
          <span className="circle circle2" />
          <span className="circle circle3" />
          <span className="circle circle4" />
        
        </div>

        <div className="glass" />

        <div className="content">
          <span className="title">About Us</span>
          <span className="text ">The Hostel Prerequisite Form Portal is an official digital platform developed to facilitate the submission and management of permission requests for hostel residents. This system is intended to enhance the administrative process by offering a  efficient, and transparent method for students to seek approval for staying outside hostel premises.</span>
<span className="text">We aim to provide a seamless experience for both students and hostel authorities by digitizing the traditional paper-based permission process. The platform ensures timely communication, accurate record-keeping, and improved oversight in line with hostel regulations.</span>        
        </div>

        <div className="bottom">
          <div className="social-buttons-container">
            <button type="button" className="social-button social-button1" aria-label="Instagram">
 <a className=' cursor-pointer' href="http://www.instagram.com/satiengg.in/" target='_blank' rel='noopener noreferrer'>
 
              <img src="instagram.png" alt=""  /></a>
            </button>
            
            <button type="button" className="social-button social-button2" aria-label="Twitter">
              <a className=' cursor-pointer' href="https://www.facebook.com/satiengg.in/" target='_blank' rel='noopener noreferrer'>
 
              <img src="facebook.png" alt="" /></a>
            </button>

            <button type="button" className="social-button social-button3" aria-label="Discord">
              <a className=' cursor-pointer' href="https://x.com/sati_vidisha/" target='_blank' rel='noopener noreferrer'>
 
              <img src="twitter.png" alt="" className="" /></a>
            </button>
          </div>

        
        </div>
      </div>
    </div>
      </div>
        
    
  )
}

export default About
