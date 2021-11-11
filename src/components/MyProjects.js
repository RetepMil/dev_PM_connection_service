import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import "../css/MyProjects.css";
import ProjectList from "./ProjectList";

const Container = styled.div`
  margin: auto;
  width: 90vw;
  height: 100vh;
  padding: 1rem;
  margin-top: 15vh;
`;

const MyProjects = () => {
  const style = {
    "font-size": "2rem",
    color: "#4D4D4D",
  };
  return (
    <Container>
      <div style={style}>|&nbsp;&nbsp;&nbsp;Our project</div>
      <ProjectList />
    </Container>
  );
};

export default MyProjects;
