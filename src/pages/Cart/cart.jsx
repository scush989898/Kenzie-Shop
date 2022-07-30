import React from "react";
import { useSelector } from "react-redux";
import { StyledDivCart } from "./style";
import CardCart from "../../components/card_cart";
import formatPrice from "../../scripts/priceFormat";

export default function Cart() {
  const cartList = useSelector((store) => store.cart);
  const totalValue = cartList.reduce((a, b) => {
    return a + b.price * b.quantity;
  }, 0);
  const totalProducts = cartList.reduce((a, b) => {
    return a + b.quantity;
  }, 0);
  return (
    <StyledDivCart>
      <div className="containerCart">
        <div className="products">
          <div className="titleCart">
            <span className="tt_cart">Produtos</span>
          </div>
          <ul>
            {cartList.map((product) => {
              return <CardCart key={product.id} product={product} />;
            })}
          </ul>
        </div>
        <div className="resume">
          <div className="titleResume">Resumo do pedido</div>
          <div className="descResume">
            <span className="descSpan">{totalProducts} Produto(s)</span>
            <span className="descSpan">{formatPrice(totalValue)}</span>
          </div>
          <button>FINALIZAR O PEDIDO</button>
        </div>
      </div>
    </StyledDivCart>
  );
}
