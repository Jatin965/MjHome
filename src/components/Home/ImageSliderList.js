import React from "react";
import Swiper from "react-id-swiper";
import ImageSlider from "./ImageSlider";

const imageData = [
  {
    id: "1",
    image: "/assets/img/image-slider/image-slider-6.jpg",
    link: "/shop-grid-standard",
  },
  {
    id: "2",
    image: "/assets/img/image-slider/image-slider-7.jpg",
    link: "/shop-grid-standard",
  },
  {
    id: "3",
    image: "/assets/img/image-slider/image-slider-8.jpg",
    link: "/shop-grid-standard",
  },
  {
    id: "4",
    image: "/assets/img/image-slider/image-slider-9.jpg",
    link: "/shop-grid-standard",
  },
  {
    id: "5",
    image: "/assets/img/image-slider/image-slider-10.jpg",
    link: "/shop-grid-standard",
  },
  {
    id: "6",
    image: "/assets/img/image-slider/image-slider-11.jpg",
    link: "/shop-grid-standard",
  },
  {
    id: "7",
    image: "/assets/img/image-slider/image-slider-12.jpg",
    link: "/shop-grid-standard",
  },
  {
    id: "8",
    image: "/assets/img/image-slider/image-slider-13.jpg",
    link: "/shop-grid-standard",
  },
];

const ImageSliderList = () => {
  const settings = {
    loop: false,
    grabCursor: true,
    breakpoints: {
      1024: {
        slidesPerView: 8,
      },
      768: {
        slidesPerView: 4,
      },
      640: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 2,
      },
    },
  };

  return (
    <div className="image-slider-area">
      <div className="image-slider-active">
        <Swiper {...settings}>
          {imageData &&
            imageData.map((single, key) => {
              return (
                <ImageSlider
                  data={single}
                  sliderClass="swiper-slide"
                  key={key}
                />
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSliderList;
