import "./Video.css";
import React from "react";
const Video = () => {
  return (
    <div className="M_Port">
      <div className="head_port">
        <h1>Video Editing</h1>
      </div>
      <samp className="bar_user"></samp>
      <div className="main_table">
        <table>
          <tbody>
            {/* https://10web-site.ai/40/wp-content/uploads/sites/43/2023/04/portoflio-1-1024x587-1_kR1AbYmu.webp" class="elementor-animation-float attachment-full size-full wp-image-18 */}
            <tr className="table_row">
              <td rowSpan={2} colSpan={2}>
                <iframe
                  className="video_file"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/uL1JkOfOMj8?si=X2rFqwOKziiuVXZC&amp;controls=0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Video;
