import React from "react";
import {
  TextContainer,
  TextContent,
  TextH1,
  TextP,
} from "./TextSectionElements";

const TextSection = (props) => {
  return (
    <TextContainer id={props.id}>
      <TextContent>
        <TextH1>about me.</TextH1>
        <TextP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          pulvinar quam vitae mattis vehicula. Etiam nec pretium metus. Nulla
          auctor auctor tortor a sodales. Aenean congue justo vel efficitur
          congue. Curabitur nunc mauris, convallis ut lectus non, lacinia
          viverra purus. Praesent tincidunt erat ac laoreet scelerisque. Etiam
          iaculis faucibus ornare. Quisque a neque egestas, faucibus tortor a,
          commodo dui. Aenean blandit consequat auctor. Mauris porttitor eros ut
          neque aliquam convallis. Etiam et feugiat ligula, vel pharetra lectus.
          Curabitur posuere nulla quis sem placerat varius.
        </TextP>
      </TextContent>
    </TextContainer>
  );
};

export default TextSection;
