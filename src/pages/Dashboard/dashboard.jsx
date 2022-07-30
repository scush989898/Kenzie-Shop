import React from "react";
import { useSelector } from "react-redux";
import { StyledDiv } from "./style.js";
import Card from "../../components/card";
export default function Dashboard() {
  const listProducts = useSelector((store) => store.products);
  return (
    <StyledDiv>
      <ul>
        {listProducts.map((product) => {
          return <Card key={product.id} product={product}></Card>;
        })}
      </ul>
    </StyledDiv>
  );
}
