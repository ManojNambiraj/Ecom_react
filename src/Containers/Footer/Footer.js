import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_top">
        <div className="footer_heading">
          <span className="footer_main_heading">
            SUBSCRIBE TO OUR NEWSLETTER
          </span>
          <br />
          <span className="footer_sub_heading">
            Be the first to get the latest news about trends, promotions, and
            much more!
          </span>
        </div>
        <div className="footer_input">
          <input type="text" placeholder="Your email address" />
          <button>JOIN</button>
        </div>
        <div className="footer_navlinks">
          <div className="footer_links">
            <span>Returns Policy</span>
            <span>Track Your Order</span>
            <span>Shipping & Delivery</span>
          </div>
          <div className="footer_icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-pinterest"></i>
          </div>
        </div>
      </div>
      <div className="footer_hr_line"></div>
      <div className="footer_bottom">
        <div className="footer_B_left">
          <span>&#169;</span>
          <span>2024 Uomo</span>
        </div>
        <div className="footer_B_right">
          <div className="country_list">
            <span>United Kingdom</span>
            &nbsp;|&nbsp;
            <span>English</span>
            &nbsp;&nbsp;
            <i class="fa-solid fa-angle-up"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span>$&nbsp;USD</span>
            &nbsp;&nbsp;
            <i class="fa-solid fa-angle-up"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
