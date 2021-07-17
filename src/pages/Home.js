import React from "react";
import ImageSliderList from "../components/Home/ImageSliderList";
import ProductTab from "../components/Home/ProductTab";
import Header from "../components/Nav/Header";

const Home = () => {
  return (
    <div>
      <Header />

      <main>

        <ProductTab
          spaceTopClass="pt-95"
          spaceBottomClass="pb-100"
          category="furniture"
        />

        <ImageSliderList />
      </main>
    </div>
  );
};

export default Home;
