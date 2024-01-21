import styled from "styled-components";

export const ContainerItens = styled.div`
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );

  height: 100vh;

  border-radius: 61px 61px 0 0;

  padding: 50px 36px;

  display: flex;
  flex-direction: column;

  ${(props) =>
    props.isBlur &&
    `
    backgroun-filter: blur(45px);
    min-height: calc(100vh - 170px);
  `}
`;
