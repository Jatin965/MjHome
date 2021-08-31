import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import RelatedProductSlider from "../components/Product/RelatedProductSlider";
import ProductDescriptionTab from "../components/Product/ProductDescriptionTab";
import ProductImageDescription from "../components/Product/ProductImageDescription";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/actions/productActions";

const Product = ({ location }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const match = useRouteMatch();

  const { error, loading, products } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    dispatch(listProducts());

    console.log(products);
  }, [dispatch, history.location, match.params.id]);

  console.log(products.filter((product) => product.id === match.params.id));

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  // if (error) {
  //   return <h1>ERROR: {error}</h1>;
  // }

  return (
    <Fragment>
      {/* product description with image */}
      <ProductImageDescription
        spaceTopClass="pt-100"
        spaceBottomClass="pb-100"
        product={products.filter((product) => product.id === match.params.id)}
      />

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

Product.propTypes = {
  location: PropTypes.object,
  product: PropTypes.object,
};

// const mapStateToProps = (state, ownProps) => {
//   const itemId = ownProps.match.params.id;
//   return {
//     product: state.productData.products.filter(
//       (single) => single.id === itemId
//     )[0],
//   };
// };

// export default connect(mapStateToProps)(Product);
export default Product;
