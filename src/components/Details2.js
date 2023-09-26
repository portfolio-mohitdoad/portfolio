import './Details2.css';
import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import about_me from "../assets/about me.png";


const Details2 = () => {
  return (
    <div>
      {/* <div className='about_add'>
        <div className='img_about_add'>
          <img className='img1_add' src={about_me} alt="main" loading="lazy" />
        </div>
        <div className='content_add'>
          <h1 className='about_me_add'>About Me</h1>
          <samp className='bar_add'></samp>
          <h2>Experienced Graphic Designer with a Passion for Quality and Creativity</h2>
          <samp className='bar_1'></samp>
          <br></br>
          {/* <h1>GRAPHICS DESIGNER.</h1> */}
      {/* <p>Greetings, my name is Mohit Doad, and I am a highly devoted graphic designer with a solid two years of experience. Throughout my career, I have had the privilege of working in both corporate and freelance environments, honing my skills in graphic design and logo creation. One notable accomplishment I take pride in is achieving second place in a national brand identity competition, which speaks to my unwavering dedication to producing high-quality work. In addition to my professional endeavors, I am constantly seeking new creative opportunities to expand my horizons.</p> */}
      {/* <br></br> */}
      {/* <p>Let’s talk with me.</p>
          <h3>contact@domain.com</h3>
          <div className='social'>
            <FaFacebook size={30} style={{ color: "#000", marginRight: "1rem " }} />
            <FaTwitter size={30} style={{ color: "#000", marginRight: "1rem " }} />
            <FaLinkedin size={30} style={{ color: "#000", marginRight: "1rem " }} />
          </div> */}
      {/* <div className='content1_add'><Link to='/contact' className='btn'>Contact me</Link></div> */}
      {/* </div> */}
      {/* </div> } */}
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
      <div className='my_service'>
        <div className='theory'>
          <h2>My Services</h2>
          <samp className='bar_theory'></samp>
          <p>Our team of skilled professionals specializes in providing top-notch services in the field of social media designs, logo design, and illustrations. With a strong emphasis on attention to detail and creativity, we strive to deliver exceptional results that exceed our clients’ expectations. From crafting captivating social media posts and banners to creating visually stunning logos that embody the essence of a brand, our services are tailored to meet the unique needs of each client. With a formal tone of voice, we ensure professionalism and a commitment to excellence in every project we undertake.</p>
          {/* <div className=''><Link to='' className='btn'>Download CV</Link></div> */}
        </div>

        <div className='stats'>
          <div class="skills">
            <div class="progress-bar-container">
              <div class="progress-bar extra-bar">
                <span class="percentage c">Graphic design</span>
              </div>
            </div>

            <div class="progress-bar-container">
              <div class="progress-bar extra-bar">
                <span class="percentage java">Logo design</span>
              </div>
            </div>

            <div class="progress-bar-container">
              <div class="progress-bar extra-bar">
                <span class="percentage python">Branding</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details2
