import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import cartReducers from "./modules/cart/reducers";
import productsReducer from "./modules/products/reducers";

const reducers = combineReducers({
  cart: cartReducers,
  products: productsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
