import './Logo.css';
import React from 'react'
import l1 from "../assets/Logo/l1.jpg";
import l2 from "../assets/Logo/l2.png";
import l3 from "../assets/Logo/l3.png";
import l4 from "../assets/Logo/l4.png";
import l5 from "../assets/Logo/l5.jpg";
import l6 from "../assets/Logo/l6.png";
import l7 from "../assets/Logo/l7.png";
const Logo = () => {
  return (
    <div className='M_Port'>
      <div className='head_port'>
        <h1>Logo Design</h1>
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
              <td rowSpan={2}><div><img className="table_img" src={l1} alt="" /></div></td>
              <td rowSpan={2}><img className="table_img" src={l2} alt="" /></td>
            </tr>
            <tr></tr>
            <tr className='table_row'>
              <td rowSpan={2}><div><img className="table_img" src={l3} alt="" /></div></td>
              <td rowSpan={2}><img className="table_img" src={l4} alt="" /></td>
            </tr>
            <tr></tr>
            <tr className='table_row'>
              <td rowSpan={2}><div><img className="table_img" src={l5} alt="" /></div></td>
              <td rowSpan={2}><img className="table_img" src={l6} alt="" /></td>
            </tr>
            <tr></tr>
            <tr className='table_row'>
              <td rowSpan={2}><div><img className="table_img" src={l7} alt="" /></div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Logo
