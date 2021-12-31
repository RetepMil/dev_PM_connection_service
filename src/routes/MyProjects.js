import React from "react";
import styled from "styled-components";
import ProjectList from "components/ProjectList";

const Container = styled.div`
  margin: auto;
  width: 90vw;
  height: 80vh;
  padding: 1rem;
  margin-top: 15vh;
`;

const MyProjects = () => {
  return (
    <Container>
      <div
        style={{
          fontSize: "2rem",
          color: "#4D4D4D",
        }}
      >
        |&nbsp;&nbsp;&nbsp;Our project
      </div>
      <ProjectList />
    </Container>
  );
};

export default MyProjects;
