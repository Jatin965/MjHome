import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import ProductGrid from "./ProductGrid";

import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../../redux/actions/productActions";

const ProductTab = ({
  spaceTopClass,
  spaceBottomClass,
  category,
  productTabClass,
  productGridStyleClass,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  // let keyword = history.location.search;

  const { error, loading, products } = useSelector(
    (state) => state.productList
  );

  console.log(products);

  useEffect(() => {
    dispatch(listProducts);

    console.log(products);
  }, [dispatch, history.location]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>ERROR: {error}</h1>;
  }

  return (
    <div
      className={`product-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        {/* section title */}
        <div
          className={`section-title ${"text-center" ? "text-center" : ""} ${
            "mb-55" ? "mb-55" : ""
          } `}
        >
          <h2>Products Collection</h2>
        </div>
        <Tab.Container defaultActiveKey="products">
          <Tab.Content>
            <Tab.Pane eventKey="products">
              <div className="row">
                <ProductGrid
                  category={category}
                  products={products}
                  type="products"
                  limit={6}
                  spaceBottomClass="mb-25"
                  productGridStyleClass={productGridStyleClass}
                />
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
        <div className="view-more text-center mt-20 toggle-btn6 col-12">
          <Link
            className="loadMore6"
            to={process.env.PUBLIC_URL + "/shop-grid-standard"}
          >
            VIEW MORE PRODUCTS
          </Link>
        </div>
      </div>
    </div>
  );
};

ProductTab.propTypes = {
  category: PropTypes.string,
  productTabClass: PropTypes.string,
  productGridStyleClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default ProductTab;
