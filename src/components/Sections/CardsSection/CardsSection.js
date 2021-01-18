import React from "react";
import {
  SectionContainer,
  SectionWrapper,
  SectionH1,
  Card,
  CardH2,
  CardIcon,
  CardP,
} from "./CardsSectionElements";

const CardsSection = (props) => {
  return (
    <SectionContainer id={props.id}>
      <SectionH1>{props.title}</SectionH1>
      <SectionWrapper>
        {props.info.map((experience) => (
          <Card>
            <CardIcon src={experience.icon} />
            <CardH2>{experience.title}</CardH2>
            <CardP>{experience.description}</CardP>
          </Card>
        ))}
      </SectionWrapper>
    </SectionContainer>
  );
};

export default CardsSection;
