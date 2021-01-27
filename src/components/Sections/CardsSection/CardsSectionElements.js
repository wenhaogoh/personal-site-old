import styled from "styled-components";

export const SectionContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
  cursor: default;

  @media screen and (min-height: 800px) {
    height: 1000px;
  }

  @media screen and (min-height: 1000px) {
    height: 1200px;
  }

  @media screen and (min-height: 1200px) {
    height: 1400px;
  }

  @media screen and (max-width: 768px) {
    height: 1100px;
    padding-top: 80px;
    justify-content: flex-start;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
    padding-top: 80px;
    justify-content: flex-start;
  }
`;

export const SectionWrapper = styled.div`
  max-width: 1000px;
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CardIconWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const CardIcon = styled.img`
  width: 100%;
`;

export const SectionH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-top: 40px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const CardH2 = styled.h2`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 5px;
`;

export const CardP = styled.p`
  font-size: 0.9rem;
  text-align: center;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
  transform: ${(props) =>
    props.isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

export const CardWrapper = styled.div`
  width: 280px;
  height: 280px;
`;

export const CardFaceFront = styled.div`
  background: #fff;
  border-radius: 10px;
  position: absolute;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
`;

export const CardFaceBack = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  position: absolute;
  padding: 30px;
  align-items: center;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

export const CardFaceBackSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const CardSmallIconsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 55px);
  align-items: center;
`;

export const CardSmallIconWrapper = styled.div`
  height: 100%;
  margin: 0 5px;
  &:hover {
    p {
      transition: opacity 0.2s ease-in;
      opacity: 1;
    }
  }
`;

export const CardSmallIcon = styled.img`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  height: 40px;
  width: 40px;
`;

export const CardSmallIconP = styled.p`
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  text-align: center;
  opacity: 0;
  transition: opacity 0.2s ease-out;
`;
