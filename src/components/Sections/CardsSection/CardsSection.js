import React, { useState } from "react";
import {
  SectionContainer,
  SectionWrapper,
  SectionH1,
  Card,
  CardWrapper,
  CardFaceFront,
  CardFaceBack,
  CardH2,
  CardIcon,
  CardIconWrapper,
  CardP,
  CardSmallIconsWrapper,
  CardSmallIconWrapper,
  CardSmallIcon,
  CardSmallIconP,
  CardFaceBackSectionWrapper,
} from "./CardsSectionElements";

const CardsSection = (props) => {
  const [isFlipped, setIsFlipped] = useState([...props.info]);

  const toggleIsFlipped = (index) => {
    const updatedIsFlipped = [...isFlipped];
    updatedIsFlipped[index].isFlipped = !updatedIsFlipped[index].isFlipped;
    setIsFlipped(updatedIsFlipped);
  };

  return (
    <SectionContainer id={props.id}>
      <SectionH1>{props.title}</SectionH1>
      <SectionWrapper>
        {props.info.map((experience, index) => (
          <CardWrapper
            onMouseEnter={() => toggleIsFlipped(index)}
            onMouseLeave={() => toggleIsFlipped(index)}
          >
            <Card key={index} isFlipped={isFlipped[index].isFlipped}>
              <CardFaceFront>
                <CardIconWrapper>
                  <CardIcon src={experience.icon} />
                </CardIconWrapper>
                <CardH2>{experience.title}</CardH2>
                <CardP>{experience.description}</CardP>
              </CardFaceFront>
              <CardFaceBack>
                <CardFaceBackSectionWrapper>
                  <CardH2>Tech Stack</CardH2>
                  <CardSmallIconsWrapper>
                    {experience.stack.map((tech, index) => (
                      <CardSmallIconWrapper key={index}>
                        <CardSmallIcon src={tech.icon} />
                        <CardSmallIconP>{tech.name}</CardSmallIconP>
                      </CardSmallIconWrapper>
                    ))}
                  </CardSmallIconsWrapper>
                </CardFaceBackSectionWrapper>
                <CardFaceBackSectionWrapper>
                  <CardH2>Languages</CardH2>
                  <CardSmallIconsWrapper>
                    {experience.languages.map((language, index) => (
                      <CardSmallIconWrapper key={index}>
                        <CardSmallIcon src={language.icon}></CardSmallIcon>
                        <CardSmallIconP>{language.name}</CardSmallIconP>
                      </CardSmallIconWrapper>
                    ))}
                  </CardSmallIconsWrapper>
                </CardFaceBackSectionWrapper>
              </CardFaceBack>
            </Card>
          </CardWrapper>
        ))}
      </SectionWrapper>
    </SectionContainer>
  );
};

export default CardsSection;
