import React from "react";
import "./VideoCard.css";

const VideoCard = () => {
  return (
    <>
      <div class="gradient-overlay"></div>

      <div className="VideoCard_container">

        <div className="video_ost_text">
          <div className="video_left">
            <div className="sub_title">ADRENALIN</div>
            <div className="title">
              NOTHING
              <br /> CAN STOP YOU
            </div>
          </div>
          <div className="video_right">
            <i class="fa-solid fa-play"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
