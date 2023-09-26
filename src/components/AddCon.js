import './AddCon.css';

import React from 'react'
import { useState } from 'react';
import { FaHome, FaPhone, FaMailBulk, } from 'react-icons/fa'


const AddCon = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // You can send the form data to your server or use a service like Email.js
        // Example: Send the data to your server using fetch or Axios

        fetch('http://localhost:5000/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data); // Handle the server's response
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className='contact'>
            <h1 >Contact</h1>
            {/* <div className='bar'></div> */}

            {/* <div className='card-container'>
                <div className='card'>
                    <h4><FaHome size={40} style={{ color: "#03630e", marginRight: "2rem " }} /></h4>
                    <p className='para_gap1'>
                        Gurugram
                    </p>
                </div>
                <div className='card'>
                    <h4><FaPhone size={40} style={{ color: "#03630e", marginRight: "2rem " }} /></h4>
                    <p className='para_gap1'>
                        6388740951
                    </p>
                </div>
                <div className='card'>
                    <h4><FaMailBulk size={40} style={{ color: "#03630e", marginRight: "2rem " }} /></h4>
                    <p className='para_gap1'>
                        aqib@123gamail.com
                    </p>
                </div>
            </div> */}
            <div className='card-container1'>
                <div className='card1'>
                    <h1 className='card1_h1'>Get In Touch</h1>
                    {/* <div className='bar1'></div> */}
                    <div className=''>
                        <form onSubmit={handleSubmit}>
                            <div className='con_touch'>
                                {/* <label htmlFor="name">Your Name</label> */}
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder='Your name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='con_touch'>
                                {/* <label htmlFor="email">Your Email</label> */}
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder='Your email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="con_touch touch3">
                                {/* <label htmlFor="message">Your Message</label> */}
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder='Your message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='button_touch'>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                    {/* <div className='button_touch'><button>Send Message</button></div> */}
                    {/* {messageSent && <p style={{ color: 'green' }}>Message Sent</p>} */}
                </div>
                {/* <div className='massage'>
                    <h1 className='massage_h1'>Message Me</h1>
                    <div className='bar1'></div>
                    <p>Please feel free to call or email us, or use our contact form to get intouch with us. </p>
                    <br></br>
                    <p>We look forward to hearing from you!</p>

                    <div className='social'>
                        <FaFacebook size={30} style={{ color: "#000", marginRight: "1rem " }} />
                        <FaTwitter size={30} style={{ color: "#000", marginRight: "1rem " }} />
                        <FaLinkedin size={30} style={{ color: "#000", marginRight: "1rem " }} />
                    </div>
                </div> */}

            </div>
        </div >


    )
}

export default AddCon
