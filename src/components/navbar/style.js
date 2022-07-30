import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f2;
  border-bottom: 1px solid rgb(0, 0, 0, 0.15);

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    width: 100%;
    max-width: 1300px;
  }

  .logo {
    width: 130px;
    height: 100%;
  }
  .logo > h2 {
    text-align: left;
    font-weight: 700;
    font-size: 21px;
    color: #8684fc;
  }

  .cartButton {
    display: flex;
    gap: 6%;
    width: 170px;
  }
  .cartBtn {
    position: relative;
  }

  button {
    border: 1px solid #8684fc;
    background-color: transparent;
    color: #8684fc;
    border-radius: 5px;
    width: 47%;
    height: 40px;
    font-weight: 400;
    font-size: 14px;
  }

  .qtCart {
    position: absolute;
    background-color: #8684fc;
    color: white;
    width: 1.9rem;
    height: 1.9rem;
    top: 0;
    left: 0;
    border: none;
    border-radius: 50%;
    transform: translate(-50%, -25%);
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  }

  @media (min-width: 1000px) {
    .container {
      padding: 10px 40px;
    }
    .logo {
      width: 300px;
      height: 100%;
    }
    .container > .logo > h2 {
      font-size: 38px;
    }
    .cartButton {
      width: 300px;
    }
    button {
      font-size: 16.7px;
    }
  }
`;
