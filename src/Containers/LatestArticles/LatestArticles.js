import React from "react";
import "./LatestArticles.css";
import pop1 from "../../assets/images/art1.jpg";
import pop2 from "../../assets/images/art2.jpg";
import pop3 from "../../assets/images/art3.jpg";

const LatestArticles = () => {
  var poplarCycles = [
    {
      img: pop2,
      heading: "WOMEN WITH GOOD SHOES IS NEVER BE UGLY PLACE",
    },
    {
      img: pop1,
      heading: "WOMEN WITH GOOD SHOES IS NEVER BE UGLY PLACE",
    },
    {
      img: pop3,
      heading: "WOMEN WITH GOOD SHOES IS NEVER BE UGLY PLACE",
    },
  ];

  return (
    <div className="poppular_container">
      <div className="popular_header_part">
        <div className="popular_main">LATEST ARTICLES</div>
        <div className="popular_sub">
          The World's Premium Brands in One Destination
        </div>
      </div>

      <div className="categories_container latest_list">
        {poplarCycles.map((item) => {
          return (
            <div className="category_card" id="article_card">
              <div class="gradient-overlay"></div>
              <img src={item.img} alt="card_picture" />
              <div className="card_heading" id="article_heading">
                <div className="author_title">
                  <span>BY ADMIN</span>
                  <span>APRIL 05, 2020</span>
                </div>
                <span>{item.heading}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestArticles;
