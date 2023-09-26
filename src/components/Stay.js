import './Stay.css';

import React from 'react'
import { Link } from 'react-router-dom';

const Stay = () => {
  return (
    <div className='stay'>
      <h1>Stay In Touch</h1>
      <p>Enter your email address to register to our newsletter subscription!</p>
      <div className='stay_email'>
        <label htmlFor="email">Email:</label>
        <samp className='bar_email'></samp>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          // value={email}
          // onChange={handleEmailChange}
          required
        />
      </div>
      <div className='content1'><Link to='/subscribe' className='btn'>Subscribe</Link></div>
    </div >
  )
}

export default Stay
