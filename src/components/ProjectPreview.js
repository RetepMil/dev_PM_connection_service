import styled from "styled-components";
import styles from "css/FindPageTemplate.module.scss";

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
`;

const ProjectPreview = ({ item }) => {
  return (
    <Container>
      <img
        height="400px"
        width="500px"
        alt="Hello"
        src={process.env.PUBLIC_URL + `/img/FindProjectDummys/${item.image}`}
      />
      <span className={styles.board_preview_text} style={{ width: "500px" }}>
        {item.name}
      </span>
    </Container>
  );
};

export default ProjectPreview;
