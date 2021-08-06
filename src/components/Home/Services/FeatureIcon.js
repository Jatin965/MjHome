import PropTypes from "prop-types";
import React from "react";
import FeatureIconSingle from "./FeatureIconSingle.js";

const featureIconData = [
  {
    id: 1,
    image: "/assets/img/icon-img/support-1.png",
    title: "Free Shipping",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm.",
  },
  {
    id: 2,
    image: "/assets/img/icon-img/support-11.png",
    title: "Support 24/7",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm.",
  },
  {
    id: 3,
    image: "/assets/img/icon-img/support-12.png",
    title: "Money Return",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm.",
  },
];

const FeatureIcon = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`support-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row feature-icon-two-wrap">
          {featureIconData &&
            featureIconData.map((single, key) => {
              return (
                <FeatureIconSingle
                  data={single}
                  spaceBottomClass="mb-30"
                  textAlignClass="text-center"
                  key={key}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

FeatureIcon.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default FeatureIcon;
