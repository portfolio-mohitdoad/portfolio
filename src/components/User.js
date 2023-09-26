import './User.css';
import React from 'react'
import Social_Media from "../assets/Social_Media.jpg";
import Logo_design from "../assets/Logo_design.jpg";
import Illustrations from "../assets/Illustrations.jpg";
import Video_Editing from "../assets/Video_Editing.jpg";
import { Link } from 'react-router-dom';

const User = () => {
  return (
    <div className='portfolio'>
      <div className='port'>
        <h1>My Portfolio</h1>
      </div>
      <samp className='bar'></samp>
      <div class="slider-container">
        <div class="slider">
        <Link to = '/socialmedia' className='slide'>
          <img src={Social_Media} alt="Image 1"></img>
        <div className='hover_content'>
              <div className='hover_text'>
                <h5>Social Media Designs</h5>
              </div>
            </div>
        </Link>
          <Link to = '/logoDesign'className="slide">
            <img src={Logo_design} alt="Image 2"></img>
            <div className='hover_content'>
              <div className='hover_text'>
                <h5>LOGO Designs</h5>
              </div>
            </div>
          </Link>
          <Link to = '/illustration' className="slide">
            <img src={Illustrations} alt="Image 3"></img>
            <div className='hover_content'>
              <div className='hover_text'>
                <h5>Illustrations & Vector art</h5>
              </div>
            </div>
          </Link>
          <Link to = '/videoediting' className="slide">
            <img src={Video_Editing} alt="Image 4" />
            <div className='hover_content'>
              <div className='hover_text'>
                <h5>Video Editing</h5>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default User
