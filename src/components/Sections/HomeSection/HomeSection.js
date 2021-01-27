import React from "react";
import { HomeContainer, HomeContent, HomeH1 } from "./HomeSectionElements";

const HomeSection = (props) => {
  return (
    <HomeContainer id={props.id}>
      <HomeContent>
        <HomeH1>{props.info}</HomeH1>
      </HomeContent>
    </HomeContainer>
  );
};

export default HomeSection;
