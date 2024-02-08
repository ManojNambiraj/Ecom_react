import React from "react";
import "./Support.css";

const Support = () => {
  var supportArr = [
    {
      heading: "FAST AND FREE DELIVERY",
      title: "Free delivery for all orders over $140",
      icon: "fa-truck",
    },
    {
      heading: "24/7 Customer Support",
      title: "Friendly 24/7 Customer Support",
      icon: "fa-headset",
    },
    {
      heading: "Money back guarantee",
      title: "We return money within 30 days",
      icon: "fa-award",
    },
  ];
  return (
    <div className="support_container">
      {supportArr.map((item) => {
        return (
          <div className="support_card">
            <i class={`fa-solid ${item.icon}`}></i>
            <div className="support_main">{item.heading}</div>
            <div className="support_sub">{item.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Support;
