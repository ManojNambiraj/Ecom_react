import React, { useEffect, useState } from "react";
import "./MostPopular.css";
import product1 from "../../assets/images/product1.png";
import product2 from "../../assets/images/product2.png";
import product3 from "../../assets/images/product3.png";
import axios from "axios";

const MostPopular = () => {
  const [datas, setDatas] = useState([]);

  const [popularState, setPopularState] = useState("bestSellers");

  const [mouseState, setMouseState] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const receivedData = await axios.get(
          "http://localhost:8080/popularList"
        );
        setDatas(receivedData.data.message);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  const mouseEntering = (idx) => {
    setMouseState(idx);
  };

  const mouseLeaving = () => {
    setMouseState(null);
  };
  return (
    <div className="poppular_container">
      <div className="popular_header_part">
        <div className="popular_main">Most Popular Products</div>
        <div className="popular_sub">
          The World's Premium Brands in One Destination
        </div>
      </div>
      <div className="poppular_state_header">
        <span
          className={`state_head ${
            popularState == "newArrivals" && "selected_state_head"
          }`}
          onClick={() => setPopularState("newArrivals")}
        >
          NEW ARRIVALS
        </span>
        <span
          className={`state_head ${
            popularState == "bestSellers" && "selected_state_head"
          }`}
          onClick={() => setPopularState("bestSellers")}
        >
          BEST SELLERS
        </span>
        <span
          className={`state_head ${
            popularState == "mostviwed" && "selected_state_head"
          }`}
          onClick={() => setPopularState("mostviwed")}
        >
          MOST VIEWED
        </span>
      </div>
      {popularState === "newArrivals" ? (
        <div className="popular_list">
          {datas.map((item, idx) => {
            return (
              <div className="popular_product_card">
                <div
                  className="product_img_box"
                  onMouseEnter={() => {
                    mouseEntering(idx);
                  }}
                  onMouseLeave={() => {
                    mouseLeaving(idx);
                  }}
                >
                  {mouseState == idx && (
                    <div class="gradient-overlay-white">
                      <i class="fa-solid fa-bag-shopping"></i>
                      <i class="fa-regular fa-eye"></i>
                      <i class="fa-regular fa-heart"></i>
                    </div>
                  )}
                  <img
                    src={item.img ? item.img : product1}
                    alt="product_picture"
                  />
                </div>
                <div className="card_details">
                  <div className="left_details">
                    <div className="pro_type">{item.type}</div>
                    <div className="pro_name">{item.name}</div>
                    <div className="pro_price">$&nbsp;{item.price}</div>
                  </div>
                  <div className="right_ratings">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : popularState === "mostviwed" ? (
        <div className="popular_list">
          {datas.map((item, idx) => {
            return (
              <div className="popular_product_card">
                <div
                  className="product_img_box"
                  onMouseEnter={() => {
                    mouseEntering(idx);
                  }}
                  onMouseLeave={() => {
                    mouseLeaving(idx);
                  }}
                >
                  {mouseState == idx && (
                    <div class="gradient-overlay-white">
                      <i class="fa-solid fa-bag-shopping"></i>
                      <i class="fa-regular fa-eye"></i>
                      <i class="fa-regular fa-heart"></i>
                    </div>
                  )}
                  <img
                    src={item.img ? item.img : product2}
                    alt="product_picture"
                  />
                </div>
                <div className="card_details">
                  <div className="left_details">
                    <div className="pro_type">{item.type}</div>
                    <div className="pro_name">{item.name}</div>
                    <div className="pro_price">$&nbsp;{item.price}</div>
                  </div>
                  <div className="right_ratings">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="popular_list">
          {datas.map((item, idx) => {
            return (
              <div className="popular_product_card">
                <div
                  className="product_img_box"
                  onMouseEnter={() => {
                    mouseEntering(idx);
                  }}
                  onMouseLeave={() => {
                    mouseLeaving(idx);
                  }}
                >
                  {mouseState == idx && (
                    <div class="gradient-overlay-white">
                      <i class="fa-solid fa-bag-shopping"></i>
                      <i class="fa-regular fa-eye"></i>
                      <i class="fa-regular fa-heart"></i>
                    </div>
                  )}
                  <img
                    src={item.img ? item.img : product3}
                    alt="product_picture"
                  />
                </div>
                <div className="card_details">
                  <div className="left_details">
                    <div className="pro_type">{item.type}</div>
                    <div className="pro_name">{item.name}</div>
                    <div className="pro_price">$&nbsp;{item.price}</div>
                  </div>
                  <div className="right_ratings">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MostPopular;
