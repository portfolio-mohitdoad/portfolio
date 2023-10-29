import "./Footer.css";
import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
// import{Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="social_me">
            <a
              href="https://instagram.com/mohit_doad?igshid=MzMyNGUyNmU2YQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>
                <FaInstagram
                  size={20}
                  style={{ color: "#fff", marginRight: "1rem " }}
                />
              </h4>
            </a>
            <a
              href="https://www.linkedin.com/in/mohit-doad-3613431ba"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>
                <FaLinkedin
                  size={20}
                  style={{ color: "#fff", marginRight: "1rem " }}
                />
              </h4>
            </a>
            <h4>
              <FaTwitter
                size={20}
                style={{ color: "#fff", marginRight: "1rem " }}
              />
            </h4>
          </div>
        </div>
        <div className="mid">
          <div className="name">
            <h4>Mohit Doad</h4>
          </div>
        </div>
        <div className="right">
          <div className="email">
            <h4>mohitdoad1234@gmail.com</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
