import React from "react";
import { StyledHeader } from "./style";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
export default function NavBar() {
  const cartList = useSelector((store) => store.cart);

  const totalProducts = cartList.reduce((a, b) => {
    return a + b.quantity;
  }, 0);
  let history = useHistory();
  return (
    <StyledHeader className="header_header">
      <div className="container">
        <div className="logo">
          <h2>Kenzie Shop</h2>
        </div>
        <div className="cartButton">
          <button onClick={() => history.push("/")}>Dashboard</button>
          <button onClick={() => history.push("/cart")} className="cartBtn">
            Carrinho
            <div className="qtCart">{totalProducts}</div>
          </button>
        </div>
      </div>
    </StyledHeader>
  );
}
