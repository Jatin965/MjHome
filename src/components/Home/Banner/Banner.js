import PropTypes from "prop-types";
import React from "react";

import BannerSingle from "./BannerSingle.js";

const bannerData = [
  {
    id: 1,
    image: "/assets/img/banner/banner14.jpg",
    title: "New Arrivals",
    subtitle: "Choose your products here",
    link: "/shop-grid-standard",
  },
  {
    id: 2,
    image: "/assets/img/banner/banner15.jpg",
    title: "Featured Products",
    subtitle: "Choose your products here",
    link: "/shop-grid-standard",
  },
  {
    id: 3,
    image: "/assets/img/banner/banner16.jpg",
    title: "Best Seller",
    subtitle: "Choose your products here",
    link: "/shop-grid-standard",
  },
];

const Banner = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`banner-area banner-area-2 ${
        spaceTopClass ? spaceTopClass : ""
      } ${spaceBottomClass ? spaceBottomClass : ""}`}
    >
      <div className="container-fluid">
        <div className="custom-row-2">
          {bannerData &&
            bannerData.map((single, key) => {
              return (
                <BannerSingle
                  spaceBottomClass="mb-10"
                  data={single}
                  key={key}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default Banner;
