import React, { useState } from "react";
import Topbar from "../components/Topbar/Topbar";
import Navbar from "../components/Navbar/Navbar";
import HomeSection from "../components/Sections/HomeSection/HomeSection";
import CardsSection from "../components/Sections/CardsSection/CardsSection";
import AboutSection from "../components/Sections/AboutSection/AboutSection";

import {
  homeInfo,
  aboutInfo,
  experienceInfo,
  projectsInfo,
} from "../constants/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Topbar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HomeSection id="home" info={homeInfo} />
      <AboutSection id="about" title="about me." info={aboutInfo} />
      <CardsSection id="experience" title="experience." info={experienceInfo} />
      <CardsSection id="projects" title="projects." info={projectsInfo} />
    </>
  );
};

export default Home;
