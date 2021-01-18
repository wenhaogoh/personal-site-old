import React from "react";
import {
  AboutContainer,
  AboutContent,
  AboutH1,
  AboutP,
} from "./AboutSectionElements";

const AboutSection = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <AboutH1>about me.</AboutH1>
        <AboutP>Hello! My name is Wen Hao.</AboutP>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutSection;
