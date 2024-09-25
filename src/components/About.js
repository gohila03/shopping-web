import React from 'react';
import '../style/About.css'; 

const FooterSection = () => {
  return (
    <footer>
      <div className="foot">
        <div className="foot-1">
          <h2>Shop Your Fantasy</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div>
            <a href="/facebook" aria-label="Facebook">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <a href="/twitter" aria-label="Twitter">
              <i className="fa-brands fa-square-twitter"></i>
            </a>
            <a href="/instagram" aria-label="Instagram">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
            <a href="/google" aria-label="Google">
              <i className="fa-brands fa-google"></i>
            </a>
          </div>
        </div>
        <div className="foot-2">
          <h5>Information</h5>
          <div className="link">
            <a href="/our-stores">Our Stores</a>
            <a href="/about-us">About Us</a>
            <a href="/business">Business</a>
            <a href="/delivery">Delivery</a>
          </div>
        </div>
        <div className="foot-3">
          <h5>Useful Links</h5>
          <div className="link">
            <a href="/our-stores">Our Stores</a>
            <a href="/about-us">About Us</a>
            <a href="/business">Business</a>
            <a href="/delivery">Delivery</a>
          </div>
        </div>
        <div className="foot-4">
          <h5>Service</h5>
          <div className="link">
            <a href="/our-stores">Our Stores</a>
            <a href="/about-us">About Us</a>
            <a href="/business">Business</a>
            <a href="/delivery">Delivery</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
