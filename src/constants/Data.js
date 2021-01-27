import PayPal from "../images/icons/companies/PayPal.svg";
import DSC from "../images/icons/companies/DSC.png";
import Roboto from "../images/icons/companies/Roboto.png";

import DoneDeal from "../images/icons/projects/DoneDeal.svg";
import NUSave from "../images/icons/projects/NUSave.png";
import Orbital from "../images/icons/projects/Orbital.png";

import C from "../images/icons/languages/C.svg";
import CSharp from "../images/icons/languages/CSharp.svg";
import CSS from "../images/icons/languages/CSS.svg";
import HTML from "../images/icons/languages/HTML.svg";
import Java from "../images/icons/languages/Java.svg";
import JavaScript from "../images/icons/languages/JavaScript.svg";
import PugJS from "../images/icons/languages/PugJS.svg";
import Python from "../images/icons/languages/Python.svg";
import TypeScript from "../images/icons/languages/TypeScript.svg";

import AndroidStudio from "../images/icons/technologies/AndroidStudio.png";
import Aseprite from "../images/icons/technologies/Aseprite.png";
import AWS from "../images/icons/technologies/AWS.svg";
import Bootstrap from "../images/icons/technologies/Bootstrap.svg";
import Docker from "../images/icons/technologies/Docker.svg";
import Express from "../images/icons/technologies/Express.svg";
import GCP from "../images/icons/technologies/GCP.svg";
import Git from "../images/icons/technologies/Git.svg";
import Heroku from "../images/icons/technologies/Heroku.svg";
import MySQL from "../images/icons/technologies/MySQL.svg";
import NodeJS from "../images/icons/technologies/NodeJS.svg";
import PostgreSQL from "../images/icons/technologies/PostgreSQL.svg";
import React from "../images/icons/technologies/React.svg";
import Sequelize from "../images/icons/technologies/Sequelize.svg";
import Spring from "../images/icons/technologies/Spring.svg";
import SQLite from "../images/icons/technologies/SQLite.svg";
import Unity from "../images/icons/technologies/Unity.svg";

export const navInfo = [
  {
    name: "about me.",
    link: "about",
  },
  {
    name: "skills.",
    link: "skills",
  },
  {
    name: "experience.",
    link: "experience",
  },
  {
    name: "projects.",
    link: "projects",
  },
  // {
  //   name: "contact.",
  //   link: "contact",
  // },
];

export const homeInfo = "Hello World!";

export const aboutInfo =
  "Hi there! I'm Wen Hao and I'm a year 2 computer science undergraduate from National University of Singapore. " +
  "I enjoy solving real world problems and bringing about entertainment using the latest technologies. " +
  "I have also fallen in love with dark mode.";

export const skillsInfo = {
  proficient: [
    {
      title: "Languages",
      items: [
        {
          name: "Java",
          icon: Java,
        },
        {
          name: "JavaScript",
          icon: JavaScript,
        },
        {
          name: "HTML",
          icon: HTML,
        },
        {
          name: "CSS",
          icon: CSS,
        },
      ],
    },
    {
      title: "Frameworks/Libraries",
      items: [
        {
          name: "NodeJS",
          icon: NodeJS,
        },
        {
          name: "Express",
          icon: Express,
        },
        {
          name: "React",
          icon: React,
        },
      ],
    },
    {
      title: "Platforms/Databases",
      items: [
        {
          name: "Git",
          icon: Git,
        },
        {
          name: "MySQL",
          icon: MySQL,
        },
        {
          name: "SQLite",
          icon: SQLite,
        },
        {
          name: "PostgreSQL",
          icon: PostgreSQL,
        },
      ],
    },
  ],
  familiar: [
    {
      title: "Languages",
      items: [
        {
          name: "Python",
          icon: Python,
        },
        {
          name: "C/C++",
          icon: C,
        },
        {
          name: "C#",
          icon: CSharp,
        },
        {
          name: "TypeScript",
          icon: TypeScript,
        },
        {
          name: "PugJS",
          icon: PugJS,
        },
      ],
    },
    {
      title: "Frameworks/Libraries",
      items: [
        {
          name: "Spring",
          icon: Spring,
        },
        {
          name: "Sequelize",
          icon: Sequelize,
        },
        {
          name: "Bootstrap",
          icon: Bootstrap,
        },
      ],
    },
    {
      title: "Platforms/Databases",
      items: [
        {
          name: "Unity",
          icon: Unity,
        },
        {
          name: "Android Studios",
          icon: AndroidStudio,
        },
        {
          name: "AWS",
          icon: AWS,
        },
        {
          name: "GCP",
          icon: GCP,
        },
        {
          name: "Heroku",
          icon: Heroku,
        },
        {
          name: "Docker",
          icon: Docker,
        },
      ],
    },
  ],
};

export const experienceInfo = [
  {
    title: "PayPal",
    subtitle: "Software Engineer Intern",
    icon: PayPal,
    isFlipped: false,
    stack: [
      {
        name: "MySQL",
        icon: MySQL,
      },
      {
        name: "Spring",
        icon: Spring,
      },
      {
        name: "Express",
        icon: Express,
      },
      {
        name: "React",
        icon: React,
      },
      {
        name: "NodeJS",
        icon: NodeJS,
      },
      {
        name: "Git",
        icon: Git,
      },
    ],
    languages: [
      {
        name: "Java",
        icon: Java,
      },
      {
        name: "JavaScript",
        icon: JavaScript,
      },
    ],
    descriptions: ["point 1", "point 2", "point 3"],
  },
  {
    title: "Developer Student Club",
    subtitle: "Software Engineer",
    icon: DSC,
    isFlipped: false,
    stack: [
      {
        name: "PostgreSQL",
        icon: PostgreSQL,
      },
      {
        name: "Express",
        icon: Express,
      },
      {
        name: "React",
        icon: React,
      },
      {
        name: "NodeJS",
        icon: NodeJS,
      },
      {
        name: "Sequelize",
        icon: Sequelize,
      },
      {
        name: "GCP",
        icon: GCP,
      },
      {
        name: "Docker",
        icon: Docker,
      },
      {
        name: "Git",
        icon: Git,
      },
    ],
    languages: [
      {
        name: "TypeScript",
        icon: TypeScript,
      },
      {
        name: "JavaScript",
        icon: JavaScript,
      },
      {
        name: "HTML",
        icon: HTML,
      },
      {
        name: "CSS",
        icon: CSS,
      },
    ],
    descriptions: ["point 1", "point 2", "point 3"],
  },
  {
    title: "Roboto Coding Academy",
    subtitle: "Software Engineer Intern",
    icon: Roboto,
    isFlipped: false,
    stack: [
      {
        name: "MySQL",
        icon: MySQL,
      },
      {
        name: "Express",
        icon: Express,
      },
      {
        name: "PugJS",
        icon: PugJS,
      },
      {
        name: "NodeJS",
        icon: NodeJS,
      },
      {
        name: "Bootstrap",
        icon: Bootstrap,
      },
      {
        name: "AWS",
        icon: AWS,
      },
      {
        name: "Git",
        icon: Git,
      },
    ],
    languages: [
      {
        name: "JavaScript",
        icon: JavaScript,
      },
      {
        name: "HTML",
        icon: HTML,
      },
      {
        name: "CSS",
        icon: CSS,
      },
    ],
    descriptions: ["point 1", "point 2", "point 3"],
  },
];

export const projectsInfo = [
  {
    title: "NUSave",
    subtitle: "Budget Management App",
    icon: NUSave,
    isFlipped: false,
    stack: [
      {
        name: "JavaFX",
        icon: Java,
      },
      {
        name: "Git",
        icon: Git,
      },
    ],
    languages: [
      {
        name: "Java",
        icon: Java,
      },
      {
        name: "CSS",
        icon: CSS,
      },
    ],
    descriptions: ["point 1", "point 2", "point 3"],
  },
  {
    title: "'Til Kingdom Come",
    subtitle: "2D Multiplayer Game",
    icon: Orbital,
    isFlipped: false,
    stack: [
      {
        name: "Unity",
        icon: Unity,
      },
      {
        name: "Aseprite",
        icon: Aseprite,
      },
      {
        name: "Git",
        icon: Git,
      },
    ],
    languages: [
      {
        name: "C#",
        icon: CSharp,
      },
    ],
    descriptions: ["point 1", "point 2", "point 3"],
  },
  {
    title: "DoneDeal",
    subtitle: "Expense Tracking App",
    icon: DoneDeal,
    isFlipped: false,
    stack: [
      {
        name: "Android Studios",
        icon: AndroidStudio,
      },
      {
        name: "SQLite",
        icon: SQLite,
      },
      {
        name: "Git",
        icon: Git,
      },
    ],
    languages: [
      {
        name: "Java",
        icon: Java,
      },
    ],
    descriptions: ["point 1", "point 2", "point 3"],
  },
];
