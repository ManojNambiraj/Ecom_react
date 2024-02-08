import React from "react";
import "./Variants.css";
import cycle1 from "../../assets/images/cycle1.png";
import cycle2 from "../../assets/images/cycle2.png";
import cycle3 from "../../assets/images/cycle3.png";

const Variants = () => {
  return (
    <div className="variants_container">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="variants_cards">
              <div className="variants_left">
                <div className="varient_type">BIKES</div>
                <div className="varient_name">NEW YORK BIKE</div>
                <div className="varient_price">${29}</div>
                <div className="icon">
                  <i class="fa-solid fa-bag-shopping"></i>
                  <i class="fa-regular fa-eye"></i>
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
              <div className="variants_right">
                <img src={cycle1} alt="cycle" />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="variants_cards">
              <div className="variants_left">
                <div className="varient_type">BIKES</div>
                <div className="varient_name">NEW YORK BIKE</div>
                <div className="varient_price">${29}</div>
                <div className="icon">
                  <i class="fa-solid fa-bag-shopping"></i>
                  <i class="fa-regular fa-eye"></i>
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
              <div className="variants_right">
                <img src={cycle2} alt="cycle" />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="variants_cards">
              <div className="variants_left">
                <div className="varient_type">BIKES</div>
                <div className="varient_name">NEW YORK BIKE</div>
                <div className="varient_price">${29}</div>
                <div className="icon">
                  <i class="fa-solid fa-bag-shopping"></i>
                  <i class="fa-regular fa-eye"></i>
                  <i class="fa-regular fa-heart"></i>
                </div>
              </div>
              <div className="variants_right">
                <img src={cycle3} alt="cycle" />
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Variants;
