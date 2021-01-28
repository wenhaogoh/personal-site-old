import styled from "styled-components";

export const SkillsContainer = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
  cursor: default;

  @media screen and (min-height: 1000px) {
    height: 1200px;
  }

  @media screen and (min-height: 1200px) {
    height: 1400px;
  }

  @media screen and (max-width: 1000px) {
    height: 1600px;
    padding-top: 80px;
    justify-content: flex-start;
  }

  @media screen and (max-width: 768px) {
    height: 2100px;
    padding-top: 80px;
    justify-content: flex-start;
  }
`;

export const SkillsContent = styled.div`
  max-width: 1000px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SkillsH1 = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 2.5rem;
  margin-top: 40px;

  @media screen and (max-width: 480px) {
    font-size 2rem;
  }
`;

export const SkillsP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: left;
  max-width: 600px;
  line-height: 150%;
  display: block;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size 18px;
  }
`;

export const SkillsPre = styled.pre`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: left;
  max-width: 600px;
  line-height: 150%;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size 18px;
  }
`;

export const SkillsCardWrapper = styled.div`
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

export const SkillsCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 280px;
  height: 280px;
`;

export const SkillsH2 = styled.h2`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 5px;
`;

export const SkillsCardSmallIcon = styled.img`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  height: 40px;
  width: 40px;
`;

export const SkillsCardSmallIconP = styled.p`
  display: flex;
  justify-content: center;
  font-size: 0.8rem;
  text-align: center;
  opacity: 0;
  transition: opacity 0.2s ease-out;
`;

export const SkillsCardSmallIconWrapper = styled.div`
  height: 100%;
  margin: 0 5px;
  &:hover {
    p {
      transition: opacity 0.2s ease-in;
      opacity: 1;
    }
  }
`;

export const SkillsCardSmallIconsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 55px);
  align-items: center;
`;
