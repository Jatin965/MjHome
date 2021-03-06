import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  listProducts,
  categoryProducts,
} from "../redux/actions/productActions";

import Banner from "../components/Home/Banner/Banner";
import BlogFeatured from "../components/Home/Blog/BlogFeatured";
import CountDownThree from "../components/Home/Deal/CountDownThree";
import ImageSliderList from "../components/Home/EndImages/ImageSliderList";
import ProductTab from "../components/Home/Products/ProductTab";
import FeatureIcon from "../components/Home/Services/FeatureIcon";
import HeroSlider from "../components/Home/Slider/HeroSlider";
import VideoPopup from "../components/Home/VideoPopup";
import CategoryGrid from "../components/Home/Category/CategoryGrid";
import BlogPost from "../components/Home/BlogPost";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  let keyword = history.location.search;

  const { error, loading, products } = useSelector(
    (state) => state.productList
  );

  const {
    error: errorC,
    loading: loadingC,
    categories,
  } = useSelector((state) => state.productCategory);

  useEffect(() => {
    dispatch(listProducts(keyword));
    dispatch(categoryProducts());
    console.log("Keyword", keyword);
  }, [keyword, dispatch, history.location]);

  console.log(categories);

  if (loading || loadingC) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <HeroSlider />

      <div style={{ height: 10 }}></div>

      <Banner />

      <CountDownThree
        spaceTopClass="pt-100"
        spaceBottomClass="pb-100"
        dateTime="November 13, 2021 12:12:00"
        countDownImage="/assets/img/banner/deal-5.png"
      />

      <FeatureIcon spaceBottomClass="pb-70" />

      <ProductTab
        spaceTopClass="pt-95"
        spaceBottomClass="pb-100"
        category="furniture"
      />

      <BlogPost />

      <VideoPopup />

      <CategoryGrid
        categoryData={categories.slice(0, 6)}
        spaceBottomClass="pb-70"
      />

      <BlogFeatured spaceBottomClass="pb-55" />

      <ImageSliderList />
    </div>
  );
};

export default Home;
