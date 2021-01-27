import styled from "styled-components";

export const AboutContainer = styled.div`
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
    padding-top: 80px;
    justify-content: flex-start;
  }
`;

export const AboutContent = styled.div`
  margin: 20px;
  padding: 20px;
  max-width: 1000px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutH1 = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 2.5rem;

  @media screen and (max-width: 480px) {
    font-size 2rem;
  }
`;

export const AboutP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: justify;
  max-width: 600px;
  line-height: 150%;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size 18px;
  }
`;

export const AboutLinkWrapper = styled.div`
  font-size: 24px;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  width: 108%;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
  }

  @media screen and (max-width: 480px) {
    font-size 18px;
  }
`;

export const AboutLink = styled.a`
  color: #fff;
  text-decoration: none;

  &::before,
  &::after {
    display: inline-block;
    opacity: 0;
    -webkit-transition: -webkit-transform 0.3s, opacity 0.2s;
    -moz-transition: -moz-transform 0.3s, opacity 0.2s;
    transition: transform 0.3s, opacity 0.2s;
  }

  &::before {
    margin-right: 10px;
    content: "[";
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    transform: translateX(20px);
  }

  &::after {
    margin-left: 10px;
    content: "]";
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    transform: translateX(-20px);
  }

  &:hover::before,
  &:hover::after,
  &:focus::before,
  &:focus::after {
    opacity: 1;
    -webkit-transform: translateX(0px);
    -moz-transform: translateX(0px);
    transform: translateX(0px);
  }

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    margin-top: 24px;
  }
`;
