import React from "react";
import "./Home.css";
import Banner from "../../Containers/Banner/Banner";
import Footer from "../../Containers/Footer/Footer";
import ScrollArrow from "../../Components/ScrollArrow/ScrollArrow";
import Categories from "../../Containers/Categories/Categories";
import MostPopular from "../../Containers/MostPopular/MostPopular";
import VideoCard from "../../Containers/VideoCard/VideoCard";
import Variants from "../../Containers/Variants/Variants";
import OurEquipment from "../../Containers/OurEquipment/OurEquipment";
import LatestArticles from "../../Containers/LatestArticles/LatestArticles";
import Support from "../../Containers/Support/Support";

const Home = () => {
  return (
    <div className="main_container">
      <div className="banner">
        <Banner />
      </div>
      <div className="home_section_1">
        <div className="categories">
          <Categories />
        </div>

        <div className="most_Popular">
          <MostPopular />
        </div>
      </div>
      <div className="video_card">
        <VideoCard />
      </div>

      <div className="home_section_3">
        <div className="variants">
          <Variants />
        </div>
      </div>

      <div className="home_section_2">
        <div className="our_equipment">
          <OurEquipment />
        </div>

        <div className="latest_articles">
          <LatestArticles />
        </div>

        <div className="support">
          <Support />
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
      <div className="ScrollArrow">
        <ScrollArrow />
      </div>
    </div>
  );
};

export default Home;
