import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { productListReducer } from "./reducers/productReducers";

import { wishlistReducer } from "./reducers/wishlistReducers";

import { cartReducer } from "./reducers/cartReducers";

import { compareReducer } from "./reducers/compareReducers";

const reducers = combineReducers({
  productList: productListReducer,

  cartData: cartReducer,
  wishlistData: wishlistReducer,
  compareData: compareReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
