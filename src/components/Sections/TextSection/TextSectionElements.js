import styled from "styled-components";

export const TextContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;

  @media screen and (max-width: 768px) {
    padding-top: 80px;
    justify-content: flex-start;
  }
`;

export const TextContent = styled.div`
  margin: 20px;
  padding: 20px;
  max-width: 1000px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextH1 = styled.h1`
  color: #fff;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size 32px;
  }
`;

export const TextP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: justify;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size 18px;
  }
`;
