import './Illust.css';
import React from 'react'
import i1 from "../assets/Illustration/i1.jpg";
import i2 from "../assets/Illustration/i2.jpg";
import i3 from "../assets/Illustration/i3.jpg";
import i4 from "../assets/Illustration/i4.jpg";
import i5 from "../assets/Illustration/i5.jpg";
import i6 from "../assets/Illustration/i6.jpg";
import i7 from "../assets/Illustration/i7.jpeg";
import i8 from "../assets/Illustration/i8.jpg";
import i9 from "../assets/Illustration/i9.jpeg";
import i10 from "../assets/Illustration/i10.jpg";
import i11 from "../assets/Illustration/i11.jpg";
import i12 from "../assets/Illustration/i12.jpg";
import i13 from "../assets/Illustration/i13.jpg";
import i14 from "../assets/Illustration/i14.jpeg";
import i15 from "../assets/Illustration/i15.jpg";
import i16 from "../assets/Illustration/i16.jpg";
import i17 from "../assets/Illustration/i17.jpg";

const Illust = () => {
  return (
    <div className='M_Port'>
      <div className='head_port'>
        <h1>Illustration</h1>
      </div>
      <samp className='bar_user'></samp>
      <div className='data_port'>
        {/* <h2>What Service You Will Get From Me</h2> */}
      </div>
      {/* <samp className='bar_user'></samp> */}
      <div className='main_table'>
        <table>
          <tbody>
            {/* https://10web-site.ai/40/wp-content/uploads/sites/43/2023/04/portoflio-1-1024x587-1_kR1AbYmu.webp" class="elementor-animation-float attachment-full size-full wp-image-18 */}
            <tr className='table_row'>
              <td rowSpan={2}><div><img className="table_img" src={i1} alt="" /></div></td>
              <td rowSpan={2}><img className="table_img" src={i2} alt="" /></td>
            </tr>
            <tr></tr>
            <tr className='table_row'>
              <td rowSpan={2} colSpan={3}><div><img className="table_img" src={i3} alt="" /></div></td>
            </tr>
            <tr></tr>
            <tr className='table_row'>
              <td rowSpan={2}><div><img className="table_img" src={i4} alt="" /></div></td>
              <td rowSpan={2}><img className="table_img" src={i5} alt="" /></td>
            </tr>
            <tr></tr>
            <tr className='table_row'>
              <td rowSpan={2}><div><img className="table_img" src={i6} alt="" /></div></td>
              <td rowSpan={2}><img className="table_img" src={i7} alt="" /></td>
            </tr>
            <tr></tr>
            <tr className='table_row'>
              <td rowSpan={2}><div><img className="table_img" src={i8} alt="" /></div></td>
              <td rowSpan={2}><img className="table_img" src={i9} alt="" /></td>
            </tr>
            <tr></tr>
            <tr className='table_row'>
              <td rowSpan={2}><div><img className="table_img" src={i10} alt="" /></div></td>
              <td rowSpan={2}><img className="table_img" src={i11} alt="" /></td>
            </tr>
            <tr></tr>
            <tr className='table_row'>
              <td rowSpan={2}><div><img className="table_img" src={i12} alt="" /></div></td>
              <td rowSpan={2}><img className="table_img" src={i13} alt="" /></td>
            </tr>
            <tr></tr>
            <tr className='table_row'>
              <td rowSpan={2}><div><img className="table_img" src={i14} alt="" /></div></td>
              <td rowSpan={2}><img className="table_img" src={i15} alt="" /></td>
            </tr>
            <tr></tr>
            <tr className='table_row'>
              <td rowSpan={2}><div><img className="table_img" src={i16} alt="" /></div></td>
              <td rowSpan={2}><img className="table_img" src={i17} alt="" /></td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Illust
