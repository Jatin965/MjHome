import React from "react";
import Swiper from "react-id-swiper";
import HeroSliderSingle from "./HeroSliderSingle.js";

const sliderData = [
  {
    id: 1,
    title: "Furniture <br /> Collection <span>2020</span>",
    subtitle: "Sale up to <span>40% off</span>",
    image: "/assets/img/slider/slider-31.jpg",
    url: "/shop-grid-standard",
  },
  {
    id: 2,
    title: "Furniture <br /> Collection <span>2020</span>",
    subtitle: "Sale up to <span>30% off</span>",
    image: "/assets/img/slider/slider-31.jpg",
    url: "/shop-grid-standard",
  },
];

const HeroSlider = () => {
  const params = {
    effect: "fade",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="pe-7s-angle-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="pe-7s-angle-right" />
      </button>
    ),
  };
  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">
        <Swiper {...params}>
          {sliderData &&
            sliderData.map((single, key) => {
              return (
                <HeroSliderSingle
                  data={single}
                  key={key}
                  sliderClass="swiper-slide"
                />
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;
