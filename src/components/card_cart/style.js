import styled from "styled-components";

export const StyledCartCard = styled.li`
  border-bottom: 1px solid rgb(134, 135, 252, 0.5);
  width: 100%;
  height: 420px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  justify-content: center;

  .mainCont {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
  }

  .btnFooter {
    width: 100%;
    height: 20%;
    display: flex;
    padding: 0 30px;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  button {
    width: 50%;
    height: 60%;
    border: 1px solid #8684fc;
    background-color: transparent;
    color: #8684fc;
    border-radius: 5px;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    max-width: 220px;
  }
  .divImgCartProduct {
    width: 210px;
    height: 210px;
  }
  .divImgCartProduct > img {
    width: 100%;
    height: 100%;
  }

  .titleProductCart > h3 {
    font-size: 15px;
    text-align: left;
  }

  .productCartPrice > h4 {
    font-size: 24px;
    font-weight: 700;
  }

  @media (min-width: 1000px) {
    width: 100%;
    height: 360px;
    .mainCont {
      display: flex;
      flex-direction: row;
      gap: 14px;
      align-items: center;
      justify-content: center;
    }

    .titleProductCart {
      max-width: 340px;
      min-width: 340px;
      padding: 10px 20px;
    }
    .productCartPrice {
      min-width: 130px;
    }
  }

  .addSubSecproduct {
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 13px;
  }

  .btnProductQuant {
    height: 60%;
    width: 40px;
    min-width: 34px;
  }
  .actQuantity {
    font-weight: 500;
    font-size: 20px;
  }
`;
