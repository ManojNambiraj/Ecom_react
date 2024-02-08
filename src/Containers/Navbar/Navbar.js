import React from "react";
import "./Navbar.css";
import brandLogo from "../../assets/images/uomo_logo.jpg";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="nav_left">
        <div className="brand_logo">
          UOM<span style={{ color: "#ae1212" }}>O</span>
        </div>
        <div className="nav_links">
          <ul>
            <li>HOME</li>
            <li>SHOP</li>
            <li>COLLECTION</li>
            <li>JOURNAL</li>
            <li>LOOKBOOK</li>
            <li>PAGES</li>
          </ul>
        </div>
      </div>
      <div className="nav_right">
        <div className="search_section">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="search" />
        </div>
        <div className="profile_section">
          <i class="fa-regular fa-user"></i>
          <i class="fa-regular fa-heart"></i>
          <div className="nav_cart_icon">
            <i class="fa-solid fa-suitcase"></i>
            <div className="cart_counter">{3}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
