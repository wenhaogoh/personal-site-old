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
  CardP,
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
                <CardIcon src={experience.icon} />
                <CardH2>{experience.title}</CardH2>
                <CardP>{experience.description}</CardP>
              </CardFaceFront>
              <CardFaceBack>
                <div>test</div>
              </CardFaceBack>
            </Card>
          </CardWrapper>
        ))}
      </SectionWrapper>
    </SectionContainer>
  );
};

export default CardsSection;
