import React from "react";
import {
  SkillsContainer,
  SkillsContent,
  SkillsH1,
  SkillsH2,
  SkillsP,
  SkillsCardWrapper,
  SkillsCard,
  SkillsCardSmallIconsWrapper,
  SkillsCardSmallIconWrapper,
  SkillsCardSmallIcon,
  SkillsCardSmallIconP,
} from "./SkillsSectionElements";

const SkillsSection = (props) => {
  return (
    <SkillsContainer id={props.id}>
      <SkillsContent>
        <SkillsH1>{props.title}</SkillsH1>
        <SkillsP>I am not bad with:</SkillsP>
        <SkillsCardWrapper>
          {props.info.proficient.map((category, index) => (
            <SkillsCard key={index}>
              <SkillsH2>{category.title}</SkillsH2>
              <SkillsCardSmallIconsWrapper>
                {category.items.map((item, index) => (
                  <SkillsCardSmallIconWrapper key={index}>
                    <SkillsCardSmallIcon src={item.icon} />
                    <SkillsCardSmallIconP>{item.name}</SkillsCardSmallIconP>
                  </SkillsCardSmallIconWrapper>
                ))}
              </SkillsCardSmallIconsWrapper>
            </SkillsCard>
          ))}
        </SkillsCardWrapper>
        <SkillsP>I have tinkered with:</SkillsP>
        <SkillsCardWrapper>
          {props.info.familiar.map((category, index) => (
            <SkillsCard key={index}>
              <SkillsH2>{category.title}</SkillsH2>
              <SkillsCardSmallIconsWrapper>
                {category.items.map((item, index) => (
                  <SkillsCardSmallIconWrapper key={index}>
                    <SkillsCardSmallIcon src={item.icon} />
                    <SkillsCardSmallIconP>{item.name}</SkillsCardSmallIconP>
                  </SkillsCardSmallIconWrapper>
                ))}
              </SkillsCardSmallIconsWrapper>
            </SkillsCard>
          ))}
        </SkillsCardWrapper>
      </SkillsContent>
    </SkillsContainer>
  );
};

export default SkillsSection;
