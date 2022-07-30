import { addProduct, removeProduct, removeQuantity } from "./actions";

export const addProductThunk = (product) => {
  return (dispatch, getStore) => {
    const { cart } = getStore();

    //if(cart.indexOf(product)!=-1
    if (cart.find((elem) => elem.id == product.id)) {
      const newList = cart.map((elem) => {
        if (elem.id == product.id) {
          elem.quantity++;
          return elem;
        }
        return elem;
      });
      localStorage.setItem("@CART", JSON.stringify(newList));
      dispatch(addProduct(newList));
    } else {
      const newList = [...cart, product];
      localStorage.setItem("@CART", JSON.stringify(newList));
      dispatch(addProduct(newList));
    }
  };
};

export const removeProductThunk = (product) => {
  return (dispatch, getStore) => {
    const { cart } = getStore();
    const list = cart.filter((elem) => {
      if (elem.id !== product.id) {
        return elem;
      }
      elem.quantity = 1;
    });
    localStorage.setItem("@CART", JSON.stringify(list));
    dispatch(removeProduct(list));
  };
};

export const removeQuantityThunk = (id) => {
  return (dispatch, getStore) => {
    const { cart } = getStore();
    const newList = cart.map((elem) => {
      if (elem.id == id) {
        elem.quantity--;
        return elem;
      }
      return elem;
    });
    localStorage.setItem("@CART", JSON.stringify(newList));
    dispatch(removeQuantity(newList));
  };
};
