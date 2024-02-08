import React from "react";
import "./Banner.css";
import Navbar from "../Navbar/Navbar";

const Banner = () => {
  return (
    <div className="banner_container">
      <div class="gradient-overlay"></div>
      <div className="banner_image_box">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="banner_ost">
          <span className="quote_line">NEW ARRIVALS</span>
          <h1 className="quote_header">
            NEW BIKE FOR
            <br />
            2021!
          </h1>
          <div className="banner_buttons">
            <button className="shop_btn">SHOP NOW</button>
            <button className="view_btn">VIEW MORE</button>
          </div>
        </div>
      </div>
      <div className="water_mark">
        MOUNTAIN
      </div>
    </div>
  );
};

export default Banner;
