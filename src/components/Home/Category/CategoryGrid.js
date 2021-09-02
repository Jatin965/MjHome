import React from "react";
import CategorySingle from "./CategorySingle.js";

const categoryDat = [
  {
    id: 1,
    image: "/assets/img/banner/banner-43.jpg",
    name: "Wooden Chair (06)",
    url: "/shop-grid-standard",
  },
  {
    id: 2,
    image: "/assets/img/banner/banner-44.jpg",
    name: "Sofa Collection (10)",
    url: "/shop-grid-standard",
  },
  {
    id: 3,
    image: "/assets/img/banner/banner-45.jpg",
    name: "Wooden Bed (06)",
    url: "/shop-grid-standard",
  },
  {
    id: 4,
    image: "/assets/img/banner/banner-43.jpg",
    name: "Wooden Chair (06)",
    url: "/shop-grid-standard",
  },
  {
    id: 5,
    image: "/assets/img/banner/banner-44.jpg",
    name: "Sofa Collection (10)",
    url: "/shop-grid-standard",
  },
  {
    id: 6,
    image: "/assets/img/banner/banner-45.jpg",
    name: "Wooden Bed (06)",
    url: "/shop-grid-standard",
  },
];

const CategoryGrid = ({ spaceBottomClass, categoryData }) => {
  return (
    <div
      className={`category-grid-area ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
      style={{ marginTop: 50 }}
    >
      <div
        className={`section-title ${"text-center" ? "text-center" : ""} ${
          "mb-55" ? "mb-55" : ""
        } `}
      >
        <h2>TOP CATEGORIES</h2>
      </div>
      <div className="container">
        <div className="row">
          {categoryData &&
            categoryData.map((single, key) => {
              return <CategorySingle data={single} key={key} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;
