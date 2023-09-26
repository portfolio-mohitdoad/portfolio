import './Social.css';

import React from 'react'
import s1 from "../assets/Social/s1.png";
import s2 from "../assets/Social/s2.jpeg";
import s3 from "../assets/Social/s3.png";
import s4 from "../assets/Social/s4.png";
import s5 from "../assets/Social/s5.jpg";
import s6 from "../assets/Social/s6.jpg";
import s7 from "../assets/Social/s7.jpeg";
import s10 from "../assets/Social/s10.jpg";
import s11 from "../assets/Social/s11.jpg";
import s12 from "../assets/Social/s12.jpg";

const Social = () => {
  return (
    <div className='M_Port'>
      <div className='head_port'>
        <h1>Social Media Designs</h1>
      </div>
      <samp className='bar_user'></samp>
      {/* <div className='data_port'>
        <h2>Social Media</h2>
      </div>
      <samp className='bar_user'></samp> */}
      <div className='main_table'>
        <table>
          <tbody>
            {/* https://10web-site.ai/40/wp-content/uploads/sites/43/2023/04/portoflio-1-1024x587-1_kR1AbYmu.webp" class="elementor-animation-float attachment-full size-full wp-image-18 */}
            <tr className='table_row'>
              <td rowSpan={2}><div><img className="table_img social_img" src={s10} alt="" /></div></td>
            </tr>
            <tr></tr>
            <tr className='table_row'>
              <td rowSpan={2}><div><img className="table_img social_img" src={s5} alt="" /></div></td>
            </tr>
            <tr></tr>
            <tr className='table_row'>
              <td rowSpan={2}><div><img className="table_img social_img" src={s11} alt="" /></div></td>
            </tr>
            <tr></tr>
            <tr className='table_row'>
              <td rowSpan={2}><div><img className="table_img social_img" src={s3} alt="" /></div></td>
            </tr>
            <tr></tr>
            <tr className='table_row'>
              <td rowSpan={2}><div><img className="table_img social_img" src={s6} alt="" /></div></td>
            </tr>
            <tr></tr>
            <tr className='table_row'>
              <td rowSpan={2}><div><img className="table_img social_img" src={s2} alt="" /></div></td>
            </tr>
            <tr></tr>
            <tr className='table_row'>
              <td rowSpan={2}><div><img className="table_img social_img" src={s12} alt="" /></div></td>
            </tr>
            <tr></tr>
            <tr className='table_row'>
              <td rowSpan={2}><div><img className="table_img social_img" src={s7} alt="" /></div></td>
            </tr>
            <tr></tr>
            <tr className='table_row'>
              <td rowSpan={2}><div><img className="table_img social_img" src={s1} alt="" /></div></td>
            </tr>
            <tr></tr>
            <tr className='table_row'>
              <td rowSpan={2}><div><img className="table_img social_img" src={s4} alt="" /></div></td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Social
