import styled from "styled-components";

export const StyledCard = styled.li`
  border: 2px solid #8684fc;
  box-shadow: 0 0 0.4em black;
  width: 280px;
  height: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  .divImg {
    width: 100%;
    height: 250px;
  }
  .divImg > img {
    width: 100%;
    height: 100%;
  }

  .mainContent {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: start;
    align-items: flex-start;
    height: 200px;
  }

  .mainContent > h4 {
    text-align: left;
    height: 110px;
    color: black;
    font-size: 15px;
    color: #19191d;
    font-weight: 400;
    line-height: 24px;
  }
  .infoValue {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    height: 90px;
    align-items: flex-end;
  }

  .infoValue > h2 {
    text-align: left;
    width: 100%;
    font-size: 24px;
    font-weight: 700;
    padding-left: 2px;
    line-height: 24px;
    color: black;
  }

  .infoValue > button {
    border: 1px solid #8684fc;
    background-color: transparent;
    color: #8684fc;
    border-radius: 5px;
    width: 100%;
    height: 46px;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    cursor: pointer;
  }
`;
