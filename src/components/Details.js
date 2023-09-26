import './Details.css';
import React from 'react'
import { Link } from 'react-router-dom';
import about_me from "../assets/about me.png";

const Details = () => {
  return (
    <div className='about'>
      <div className='img_about'>
        <img className='img2' src={about_me} alt="" loading="lazy"></img>
      </div>
      <div className='content_detail'>
        <h1 className='about_me'>About Me</h1>
        <samp className='about_bar'></samp>
        <h2>Experienced Graphic Designer with a Passion for Quality and Creativity</h2>
        <br></br>
        {/* <h1>GRAPHICS DESIGNER.</h1> */}
        <p>Greetings, my name is Mohit Doad, and I am a highly devoted graphic designer with a solid two years of experience. Throughout my career, I have had the privilege of working in both corporate and freelance environments, honing my skills in graphic design and logo creation. One notable accomplishment I take pride in is achieving second place in a national brand identity competition, which speaks to my unwavering dedication to producing high-quality work. In addition to my professional endeavors, I am constantly seeking new creative opportunities to expand my horizons.</p>
        <div className='content1 left_side'><Link to='/contact' className='btn'>Contact me</Link></div>
      </div>
    </div>
  )
}

export default Details
