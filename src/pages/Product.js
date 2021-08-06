import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import RelatedProductSlider from "../components/Product/RelatedProductSlider";
import ProductDescriptionTab from "../components/Product/ProductDescriptionTab";
import ProductImageDescription from "../components/Product/ProductImageDescription";

const Product = ({ location, product }) => {
  // const { pathname } = location;

  return (
    <Fragment>
      {/* product description with image */}
      <ProductImageDescription
        spaceTopClass="pt-100"
        spaceBottomClass="pb-100"
        product={product}
      />

      {/* product description tab */}
      <ProductDescriptionTab
        spaceBottomClass="pb-90"
        // productFullDesc={product.fullDescription}
      />

      {/* related product slider */}
      <RelatedProductSlider
        spaceBottomClass="pb-95"
        // category={product.category[0]}
      />
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
