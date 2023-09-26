import './Services.css';

import React from 'react'
import illus from "../assets/services/Illustration.png";
import lgd from "../assets/services/Logo des.png";
import scmd from "../assets/services/Social med.png";

const Services = () => {
  return (
    <div className='services'>
      <div className='serv-div'>
        <h1>Services I'm Providing</h1>
      </div>
      <samp className='bar'></samp>
      <div className='provides'>
        <div className='box'>
          <div>
            <img className='service_img' src={scmd} alt="Social" />
          </div>
          <h2>Professional Social Media Design Services</h2>
          <p>As a dedicated graphic designer, I offer top-notch social media designs that will elevate your brand's online presence and captivate your audience.</p>
        </div>
        <div className='box'>
          <div>
            <img className='service_img' src={lgd} alt="Logo_des" />
          </div>
          <h2>Expert Logo Design Services for You</h2>
          <p>I am a dedicated graphic designer with two years of experience, offering professional logo design services with a commitment to quality.</p>
        </div>
        <div className='box'>
          <div>
            <img className='service_img' src={illus} alt="Illustrations" />
          </div>
          <h2>Expert Illustrations by Mohit Doad</h2>
          <p>As a skilled graphic designer, I offer top-notch illustrations that capture the essence of your brand and bring your ideas to life.</p>
        </div>
      </div>
    </div>
  )
}

export default Services
