import styled from "styled-components";
import Background from "../../assets/background.svg";


export const Container = styled.div`
  background: url(${Background});
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Imagem = styled.img`
  margin-top: 30px;
`;




export const InputLabel = styled.p`
  letter-spacing: -0.408;
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 22px;
  margin-left: 25px;

  color: #eeeeee;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  padding-left: 25px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  border: none;
  outline: none;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 20px;
  margin-bottom: 34px;
`;

export const Button = styled.button`
  width: 342px;
  height: 74px;

  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  border: none;
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

&:active{
    opacity: 0.5;
}

`;