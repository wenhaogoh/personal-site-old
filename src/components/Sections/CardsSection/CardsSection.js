import React, { useState } from "react";
import {
  SectionContainer,
  SectionWrapper,
  SectionH1,
  SectionP,
  SectionItemWrapper,
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
  ModalContainer,
  ModalContent,
  ModalUl,
  ModalLi,
  ModalSmallIconWrapper,
  ModalSmallIconsWrapper,
} from "./CardsSectionElements";
import Github from "../../../images/icons/technologies/Github.svg";

const CardsSection = (props) => {
  const [isFlipped, setIsFlipped] = useState([...props.info]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const toggleIsFlipped = (index) => {
    const updatedIsFlipped = [...isFlipped];
    updatedIsFlipped[index].isFlipped = !updatedIsFlipped[index].isFlipped;
    setIsFlipped(updatedIsFlipped);
  };

  const toggleIsOpen = (experience) => {
    setIsOpen(!isOpen);
    if (experience) {
      setModalContent(experience);
    }
  };

  const launchGithub = (event, url) => {
    event.stopPropagation();
    window.open(url, "_blank");
  };

  return (
    <SectionContainer id={props.id}>
      <SectionH1>{props.title}</SectionH1>
      <SectionWrapper>
        {props.info.map((experience, index) => (
          <SectionItemWrapper>
            <CardWrapper
              key={index}
              onMouseEnter={() => toggleIsFlipped(index)}
              onMouseLeave={() => toggleIsFlipped(index)}
            >
              <Card isFlipped={isFlipped[index].isFlipped}>
                <CardFaceFront>
                  <CardIconWrapper>
                    <CardIcon src={experience.icon} />
                  </CardIconWrapper>
                  <CardH2>{experience.title}</CardH2>
                  <CardP>{experience.subtitle}</CardP>
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
            <SectionP onClick={() => toggleIsOpen(experience)}>more.</SectionP>
          </SectionItemWrapper>
        ))}
      </SectionWrapper>
      <ModalContainer isOpen={isOpen} onClick={() => toggleIsOpen()}>
        <ModalContent>
          {modalContent == null ? null : (
            <>
              <CardIconWrapper>
                <CardIcon src={modalContent.icon} />
              </CardIconWrapper>
              <CardH2>{modalContent.title}</CardH2>
              <CardP>{modalContent.subtitle}</CardP>
              <ModalUl>
                {modalContent.descriptions.map((description, index) => (
                  <ModalLi key={index}>{description}</ModalLi>
                ))}
              </ModalUl>
              <ModalSmallIconsWrapper>
                {modalContent.github ? (
                  <ModalSmallIconWrapper
                    onClick={(event) =>
                      launchGithub(event, modalContent.github)
                    }
                  >
                    <CardSmallIcon src={Github}></CardSmallIcon>
                    <CardSmallIconP>GitHub</CardSmallIconP>
                  </ModalSmallIconWrapper>
                ) : null}
              </ModalSmallIconsWrapper>
            </>
          )}
        </ModalContent>
      </ModalContainer>
    </SectionContainer>
  );
};

export default CardsSection;
