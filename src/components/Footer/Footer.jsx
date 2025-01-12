import React from 'react';
import { assets } from '../../assets/assets';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer" id="Footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <div className="logo">
            INNFoodie
          </div>
          <p className="footer-description">
            Our brand is built on the values that drive us to locate and create the best experience for you.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy & Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li><a href="7007836367">+91-7007836367</a></li>
            <li ><a href="priyanshukumarsingh9484@gmail.com">contact@tomato.com</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ Tomato.com - All Rights Reserved. Welcome to INNFoodie! @Priyanshu 
      </p>
    </div>
  );
};

export default Footer

