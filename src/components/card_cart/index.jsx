import React from "react";
import { StyledCartCard } from "./style";
import { removeProductThunk } from "../../store/modules/cart/thunks";
import { removeQuantityThunk } from "../../store/modules/cart/thunks";
import { useDispatch } from "react-redux";
import formatPrice from "../../scripts/priceFormat";
import { addProductThunk } from "../../store/modules/cart/thunks";
import { useSelector } from "react-redux";

export default function CardCart({ product }) {
  const dispatch = useDispatch();
  const cartList = useSelector((store) => store.cart);

  function removeUniqItem(id) {
    cartList.filter((elem) => {
      if (elem.id == id) {
        if (elem.quantity > 1) {
          dispatch(removeQuantityThunk(elem.id));
          return;
        }
        dispatch(removeProductThunk(elem));
      }
    });
  }

  return (
    <StyledCartCard>
      <div className="mainCont">
        <div className="divImgCartProduct">
          <img src={product.imageUrl} alt={product.productName} />
        </div>
        <div className="titleProductCart">
          <h3>{product.productName}</h3>
        </div>
        <div className="productCartPrice">
          <h4>{formatPrice(product.price)}</h4>
        </div>
      </div>
      <div className="btnFooter">
        <div className="addSubSecproduct">
          <button
            className="btnProductQuant"
            onClick={() => removeUniqItem(product.id)}
          >
            -
          </button>
          <span className="actQuantity">{product.quantity}</span>
          <button
            className="btnProductQuant"
            onClick={() => dispatch(addProductThunk(product))}
          >
            +
          </button>
        </div>
        <button onClick={() => dispatch(removeProductThunk(product))}>
          Remover
        </button>
      </div>
    </StyledCartCard>
  );
}
