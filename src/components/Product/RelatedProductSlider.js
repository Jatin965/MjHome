import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import ProductGrid from "../Home/Products/ProductGrid";

const RelatedProductSlider = ({ spaceBottomClass, category, products }) => {
  const settings = {
    loop: false,
    slidesPerView: 4,
    grabCursor: true,
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <div
      className={`related-product-area ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div
          className={`section-title ${"text-center" ? "text-center" : ""} ${
            "mb-55" ? "mb-55" : ""
          } `}
        >
          <h2>Related Products</h2>
        </div>
        <div className="row">
          <Swiper {...settings}>
            <ProductGrid
              category={category}
              limit={4}
              products={products}
              sliderClassName="swiper-slide"
            />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

RelatedProductSlider.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string,
};

export default RelatedProductSlider;
