import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "css/MyPage.module.scss";
import Modal from "components/Modal";
import { createGlobalStyle } from "styled-components";

const BackgroundStyle = createGlobalStyle`
  body {
    background: #E5E5E5;
  }
`;

const MyPage = () => {
  const [isModalOn, setIsModalOn] = useState(false);
  const onAboutBtnClick = () => {
    setIsModalOn(true);
  };

  return (
    <>
      <BackgroundStyle />
      <div
        to="/MyProjects"
        className={`${styles.round_button} ${styles.about}`}
        onClick={onAboutBtnClick}
      >
        About Me
      </div>
      <div className={`${styles.round_button} ${styles.my_projects}`}>
        <Link to="/MyProjects">My Projects</Link>
      </div>
      <div className={`${styles.round_button} ${styles.our_projects}`}>
        <Link to="/MyProjects">Our Projects</Link>
      </div>
      {isModalOn ? (
        <Modal modalTypeInput="TechStack" setIsModalOn={setIsModalOn} />
      ) : null}
    </>
  );
};

export default MyPage;
