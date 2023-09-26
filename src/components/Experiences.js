import './Experiences.css';

import React from 'react'

const Experiences = () => {
    return (
        <div className='experience'>
            <div className='exp2'>
                <h1>Work Experience</h1>
            </div>
            <samp className='bar'></samp>
            <div className='exp-container'>
                <div className='exp-card'>
                    <h2>Graphic design</h2>
                    <p className='exp_gap'>
                        Graphic design is the art of combining visual elements to communicate messages and evoke emotions. With a keen eye for aesthetics and a deep understanding of design principles, a skilled graphic designer can create captivating visuals that effectively convey ideas and leave a lasting impact.
                    </p>
                    <div class="exp-progress-bar bar_line1">
                        <span class="exp-percentage gd"></span>
                    </div>
                </div>
                <div className='exp-card'>
                    <h2>Logo design</h2>
                    <p className='exp_gap'>
                        Logo Design: With a keen eye for aesthetics and a deep understanding of branding, I excel at creating impactful and visually stunning logos that effectively represent a company’s identity and values. From concept development to final execution, I meticulously craft every element to ensure a cohesive and memorable logo that resonates with target audiences.
                    </p>
                    <div class="exp-progress-bar bar_line2">
                        <span class="exp-percentage ld"></span>
                    </div>
                </div>
                <div className='exp-card'>
                    <h2>Branding</h2>
                    <p className='exp_gap'>
                        Branding is a crucial aspect of any business, and I excel in this area with my extensive knowledge and expertise. With a keen eye for detail and a deep understanding of the power of visual communication, I have the ability to create unique and impactful brand identities that resonate with target audiences.
                    </p>
                    <div class="exp-progress-bar bar_line3">
                        <span class="exp-percentage b"></span>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Experiences
