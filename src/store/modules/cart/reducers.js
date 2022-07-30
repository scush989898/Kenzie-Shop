import { ADD_PRODUCTS } from "./actionTypes";
import { REMOVE_PRODUCTS } from "./actionTypes";
import { REMOVE_UNIQUE } from "./actionTypes";

const cartReducers = (
  state = JSON.parse(localStorage.getItem("@CART")) || [],
  action
) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return action.list;
    case REMOVE_PRODUCTS:
      return action.list;
    case REMOVE_UNIQUE:
      return action.list;
    default:
      return state;
  }
};

export default cartReducers;
