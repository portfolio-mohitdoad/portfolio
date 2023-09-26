import './ClintCard.css';

import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import c1 from "../assets/c1.jpeg";
import c2 from "../assets/c2.jpeg";
import c3 from "../assets/c3.jpeg";
const clintCard = () => {
    return (
        <div className='client'>
            <h1>What My Clients Say</h1>
            <samp className='bar'></samp>
            <div className='card-container'>
                <div className='client_card'>
                    <div className='quote'>
                        <FaQuoteLeft size={30} style={{ color: "#03630e", marginLeftt: "1rem ", marginTop: "-1rem", marginBottom: "2rem" }} />
                    </div>
                    <img class="client_img client_img1" src={c1} alt="" loading="lazy">
                    </img>
                    <p className='para_gap1'>
                        The social media designs provided were on point!  Definitely saw a bump in likes and new people following us. Thanks for making us stand out!
                    </p>
                    <samp className='bar_cc'></samp>
                    <p>Ankita</p>
                </div>
                <div className='client_card'>
                    <div className='quote'>
                        <FaQuoteLeft size={30} style={{ color: "#03630e", marginLeftt: "1rem ", marginTop: "-1rem", marginBottom: "2rem" }} />
                    </div>
                    <img class="client_img client_img2" src={c2} alt="" loading="lazy">
                    </img>
                    <p className='para_gap2'>
                        The logo design was professional, giving our brand a recognizable identity. Its precision and thoughtful craftsmanship reflect a deep understanding of our vision.
                    </p>
                    <samp className='bar_cc'></samp>
                    <p>Karnik Gandhi</p>
                </div>
                <div className='client_card'>
                    <div className='quote'>
                        <FaQuoteLeft size={30} style={{ color: "#03630e", marginLeftt: "1rem ", marginTop: "-1rem", marginBottom: "2rem" }} />
                    </div>
                    <img class="client_img client_img3" src={c3} alt="" loading="lazy">
                    </img>
                    <p className='para_gap3'>
                        Illustrations are just amazing! They capture so much personality and detail. The depth and emotion in each piece are truly remarkable.
                    </p>
                    <samp className='bar_cc'></samp>
                    <p>Shivam Dubey</p>
                </div>

            </div>

        </div>
    )
}

export default clintCard
