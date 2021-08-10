import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";

import { productListReducer } from "./reducers/productReducers";

import { wishlistReducer } from "./reducers/wishlistReducers";

import { cartReducer } from "./reducers/cartReducers";

const reducers = combineReducers({
  productList: productListReducer,

  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,

  cartData: cartReducer,
  wishlistData: wishlistReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
