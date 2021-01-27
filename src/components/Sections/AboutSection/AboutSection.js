import React from "react";
import {
  AboutContainer,
  AboutContent,
  AboutH1,
  AboutP,
  AboutLinkWrapper,
  AboutLink,
} from "./AboutSectionElements";

const AboutSection = (props) => {
  return (
    <AboutContainer id={props.id}>
      <AboutContent>
        <AboutH1>{props.title}</AboutH1>
        <AboutP>{props.info}</AboutP>
        <AboutLinkWrapper>
          <AboutLink href="https://www.github.com/wenhaogoh" target="_blank">
            github.
          </AboutLink>
          <AboutLink
            href="https://www.linkedin.com/in/wenhaogoh"
            target="_blank"
          >
            linkedin.
          </AboutLink>
          <AboutLink>resume.</AboutLink>
        </AboutLinkWrapper>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutSection;
