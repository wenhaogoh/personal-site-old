import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
  cursor: default;

  @media screen and (min-height: 700px) {
    height: 800px;
  }

  @media screen and (min-height: 1000px) {
    height: 1000px;
  }

  @media screen and (min-height: 1200px) {
    height: 1400px;
  }
`;

export const HomeContent = styled.div`
  max-width: 1000px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeH1 = styled.h1`
  color: #fff;
  text-align: center;
  overflow: hidden;
  border-right: 0.5em solid white;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .4em;
  animation: 
  typing 2s steps(12, end),
    blink-caret .75s step-end infinite;

  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: white; }
  }

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }

  @media screen and (max-width: 480px) {
    font-size 28px;
  }

  @media screen and (max-width: 360px) {
    font-size 20px;
  }
`;
