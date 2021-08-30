import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { connect } from "react-redux";
// import { getProducts } from "../../helpers/product";
import ProductGridSingle from "./ProductGridSingle";
import { addToCart } from "../../../redux/actions/cartActions";
import { addToWishlist } from "../../../redux/actions/wishlistActions";

const ProductGrid = ({
  products,
  addToCart,
  addToWishlist,
  cartItems,
  wishlistItems,
  sliderClassName,
  spaceBottomClass,
  colorClass,
  productGridStyleClass,
}) => {
  return (
    <Fragment>
      {products.map((product) => {
        return (
          <ProductGridSingle
            sliderClassName={sliderClassName}
            spaceBottomClass={spaceBottomClass}
            colorClass={colorClass}
            productGridStyleClass={productGridStyleClass}
            product={product}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
            // cartItem={
            //   cartItems.filter((cartItem) => cartItem.id === product.id)[0]
            // }
            // wishlistItem={
            //   wishlistItems.filter(
            //     (wishlistItem) => wishlistItem.id === product.id
            //   )[0]
            // }
            // compareItem={
            //   compareItems.filter(
            //     (compareItem) => compareItem.id === product.id
            //   )[0]
            // }
            key={product.id}
          />
        );
      })}
    </Fragment>
  );
};

ProductGrid.propTypes = {
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  cartItems: PropTypes.array,
  currency: PropTypes.object,
  products: PropTypes.array,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string,
  productGridStyleClass: PropTypes.string,
  wishlistItems: PropTypes.array,
};

// const mapStateToProps = (state, ownProps) => {
//   return {
//     products: getProducts(
//       state.productData.products,
//       ownProps.category,
//       ownProps.type,
//       ownProps.limit
//     ),
//     cartItems: state.cartData,
//     wishlistItems: state.wishlistData,
//     compareItems: state.compareData,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToCart: (
//       item,
//       addToast,
//       quantityCount,
//       selectedProductColor,
//       selectedProductSize
//     ) => {
//       dispatch(
//         addToCart(
//           item,
//           addToast,
//           quantityCount,
//           selectedProductColor,
//           selectedProductSize
//         )
//       );
//     },
//     addToWishlist: (item, addToast) => {
//       dispatch(addToWishlist(item, addToast));
//     },
//     addToCompare: (item, addToast) => {
//       dispatch(addToCompare(item, addToast));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid);

export default ProductGrid;
