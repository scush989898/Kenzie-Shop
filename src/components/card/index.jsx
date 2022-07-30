import React from "react";
import { StyledCard } from "./style";
import { useDispatch } from "react-redux";
import { addProductThunk } from "../../store/modules/cart/thunks";
import formatPrice from "../../scripts/priceFormat";

export default function Card({ product }) {
  const dispatch = useDispatch();
  return (
    <StyledCard>
      <div className="divImg">
        <img src={product.imageUrl} alt={product.productName} />
      </div>
      <div className="mainContent">
        <h4>{product.productName}</h4>
        <div className="infoValue">
          <h2>{formatPrice(product.price)}</h2>
          <button onClick={() => dispatch(addProductThunk(product))}>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </StyledCard>
  );
}
