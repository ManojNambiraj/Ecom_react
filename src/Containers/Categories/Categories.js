import React from "react";
import "./Categories.css";
import pop1 from "../../assets/images/pop1.jpg";
import pop2 from "../../assets/images/pop2.jpg";
import pop3 from "../../assets/images/pop3.jpg";

const Categories = () => {
  var poplarCycles = [
    {
      img: pop2,
      heading: "MOUNTAIN BIKE EXTREME DRIVING",
    },
    {
      img: pop1,
      heading: "BIKE FOR PROFESSIONAL",
    },
    {
      img: pop3,
      heading: "LONG RIDE ON A ROAD BIKE",
    },
  ];
  return (
    <div className="categories_container">
      {poplarCycles.map((item) => {
        return (
          <div className="category_card">
            <div class="gradient-overlay"></div>
            <img src={item.img} alt="card_picture" />
            <div className="card_heading">
              <span>{item.heading}</span>
              <br />
              <span id="shop_link">Shop Now</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
