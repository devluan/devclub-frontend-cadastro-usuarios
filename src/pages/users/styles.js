import styled from "styled-components";

import Background from "../../assets/background1.svg";

export const Container = styled.div`
  background: url(${Background});
  height: 100%;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

`;

export const Imagem = styled.img`
  margin-top: 30px;
`;


export const Button = styled.button`
  width: 342px;
  height: 74px;

  background: transparent;
  border-radius: 14px;
  border: 1px solid #ffffff;

  margin-top: 135px;

  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 28px;

  color: #ffffff;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  img {
    transform: rotateY(180deg);
  }
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 342px;
  height: 58px;
  padding-left: 25px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  border: none;
  outline: none;
  font-size: 24px;
  margin-top: 34px;

  p {
    color: #ffffff;
    font-style: normal;
    line-height: 28px;
    font-weight: 400;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;
