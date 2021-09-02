import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import RelatedProductSlider from "../components/Product/RelatedProductSlider";
import ProductDescriptionTab from "../components/Product/ProductDescriptionTab";
import ProductImageDescription from "../components/Product/ProductImageDescription";

import { useDispatch, useSelector } from "react-redux";
import { detailProduct } from "../redux/actions/productActions";

const Product = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const match = useRouteMatch();

  const { error, loading, product } = useSelector(
    (state) => state.productDetail
  );

  console.log(product);

  useEffect(() => {
    dispatch(detailProduct(match.params.id));

    console.log(product);
  }, [dispatch, history.location, match.params.id]);

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  if (error) {
    return <h1>ERROR: {error}</h1>;
  }

  return (
    <Fragment>
      {/* product description with image 
      <ProductImageDescription
        spaceTopClass="pt-100"
        spaceBottomClass="pb-100"
        // product={product}
      />*/}

      {/* product description tab */}
      <ProductDescriptionTab
        spaceBottomClass="pb-90"
        // productFullDesc={product.fullDescription}
      />

      {/* related product slider */}
      {/* <RelatedProductSlider
        spaceBottomClass="pb-95"
        category={products.category[0]}
        products={products}
      /> */}
    </Fragment>
  );
};

export default Product;
