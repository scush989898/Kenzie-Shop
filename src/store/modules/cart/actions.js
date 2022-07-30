import { ADD_PRODUCTS } from "./actionTypes";
import { REMOVE_PRODUCTS } from "./actionTypes";
import { REMOVE_UNIQUE } from "./actionTypes";

export const addProduct = (list) => {
  return {
    type: ADD_PRODUCTS,
    list,
  };
};

export const removeProduct = (list) => {
  return {
    type: REMOVE_PRODUCTS,
    list,
  };
};

export const removeQuantity = (list) => {
  return {
    type: REMOVE_UNIQUE,
    list,
  };
};
