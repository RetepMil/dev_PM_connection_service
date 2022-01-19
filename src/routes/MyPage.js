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
        className={`${styles.round_button} ${styles.about}`}
        onClick={onAboutBtnClick}
      >
        About Me
      </div>
      <Link
        to="/mypage/myprojects"
        className={`${styles.round_button} ${styles.my_projects}`}
      >
        My Projects
      </Link>
      <Link
        to="/mypage/ourprojects"
        className={`${styles.round_button} ${styles.our_projects}`}
      >
        Our Projects
      </Link>
      {isModalOn ? (
        <Modal modalTypeInput="TechStack" setIsModalOn={setIsModalOn} />
      ) : null}
    </>
  );
};

export default MyPage;
