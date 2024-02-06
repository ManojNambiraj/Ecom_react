import React from "react";
import bannerImg from "../assets/images/banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="banner_image_box">
        <img src={bannerImg} alt="banner_image" />
      </div>
    </>
  );
};

export default Banner;
