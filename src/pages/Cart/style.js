import styled from "styled-components";

export const StyledDivCart = styled.div`
  width: 100vw;
  min-height: 90vh;
  background-color: #f5f5f2;
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  background-color: #f5f5f2;

  .containerCart {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    width: 100%;
    max-width: 1300px;
  }

  @media (min-width: 1200px) {
    .containerCart {
      padding: 0px 40px;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
    }
  }

  .products {
    border: 1px solid #8684fc;
    background-color: #fffffd;
    width: 100%;
    max-width: 800px;
    height: auto;
  }

  .titleCart {
    border-bottom: 1px solid rgb(134, 135, 252, 0.5);
    width: 100%;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
  }

  .tt_cart {
    font-weight: 700;
    font-size: 20px;
  }

  ul {
    padding: 10px 10px 0px 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .resume {
    border: 1px solid #8684fc;
    background-color: #fffffd;
    width: 100%;
    max-width: 350px;
    height: 280px;
    padding: 35px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }

  .titleResume {
    width: 100%;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
  }

  .descResume {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .descSpan {
    font-weight: 400;
    font-size: 19px;
  }

  button {
    width: 100%;
    height: 50px;
    border: 1px solid #8684fc;
    background-color: transparent;
    color: #8684fc;
    border-radius: 5px;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    max-width: 300px;
  }
`;
