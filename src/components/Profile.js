import './Profile.css'
import React from 'react'
import { Link } from 'react-router-dom'
import main from "../assets/main.png";
// import myself from "../assets/myself.png";
// import ring from "../assets/ring.png";
// import ring_with_icon from "../assets/ring_with_icon.png";
// import ai_icon from "../assets/ai icon.png";
// import fig_icon from "../assets/fig icon.png";
// import Prc_icon from "../assets/Prc icon.png";
// import Ps_icon from "../assets/Ps icon.png";

const profile = () => {
  return (
    <div className='profile'>
      <div className='new_img'>
        <img className='main_img' src={main} alt='introImg' />
      </div>
      <div className='content'>
        <h1>I'm Mohit Doad</h1>
        {/* <h1>GRAPHICS DESIGNER.</h1> */}
        <p>I am Mohit Doad, a graphic designer with two years of experience in both corporate and freelance settings, specializing in graphic design and logo creation. I have received recognition for my work, including placing second in a national brand identity competition, which demonstrates my dedication to producing high-quality designs. In addition to my professional endeavors, I continuously seek out new creative opportunities.</p>
        <div className='content1'><Link to='/about' className='btn'>Learn More</Link></div>
      </div>
      {/* <div className='content1'>
            <Link to = '/contact' className='btn btn-light'>Contact</Link>
        </div> */}

    </div>
  )
}

export default profile
