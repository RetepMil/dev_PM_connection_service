import React from "react";
import styled from "styled-components";

const IMG = styled.img`
  width: 100%;
  min-height: 80%;
  object-fit: fill;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    transition: all 0.2s;
    transform: scale(1.02);
    cursor: pointer;
  }
`;

const DIV = styled.div`
  width: 25vw;
  flex-direction: column;
  display: flex;
  justify-content: center;
  height: 100%;
  margin: 0 1.6vw;
`;

const SPAN = styled.span`
  font-size: 1rem;
  padding-top: 30px;
`;

const printTitle = (title) => {
  const TITLE_LENGTH = 29;
  if (title.length > TITLE_LENGTH) return title.slice(0, TITLE_LENGTH) + "...";
  else return title;
};

const Project = ({ image, title }) => {
  return (
    <DIV>
      <IMG
        alt="no"
        src={process.env.PUBLIC_URL + `/img/ProjectList/${image}`}
      />
      <SPAN>{printTitle(title)}</SPAN>
    </DIV>
  );
};

export default Project;
