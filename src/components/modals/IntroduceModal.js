import styles from "css/Modal.module.scss";
import introduce_styles from "css/ModalIntroduce.module.scss";
import { ReactComponent as NextArrow } from "assets/nextArrow.svg";
import { ReactComponent as PrevArrow } from "assets/prevArrow.svg";
import { useState } from "react";

let dummy_data = {
  img: "1.png",
  nickname: "코딩하는 호랑이",
  self_introduction:
    "안녕하세요 저는 이런 사람입니다.\n여러분과 함께하고 싶습니다",
  career: ["ㅇㅇ공모전 참가, 본선 진출", "ㅇㅇ서버 플랫폼 개발 참여"],
  portfolio: "모르곘다",
};

const IntroduceModal = ({ moveToAnotherModal }) => {
  const [userData] = useState(dummy_data);
  const prevModalType = "TechStack";
  const nextModalType = "ApplyMessage";
  return (
    <>
      <PrevArrow
        style={{ position: "absolute", top: "48px", left: "35%" }}
        onClick={() => moveToAnotherModal(prevModalType)}
      />
      <NextArrow
        style={{ position: "absolute", top: "48px", right: "35%" }}
        onClick={() => moveToAnotherModal(nextModalType)}
      />
      <div className={styles.modal_title}>Introduce</div>
      <div className={introduce_styles.introduce_container}>
        <div className={introduce_styles.section_title}>Self Introduction</div>
        <div className={introduce_styles.section_content}>
          <img
            src={process.env.PUBLIC_URL + `/img/${userData.image}`}
            style={{ width: "200px", height: "200px", float: "left" }}
            alt="userDataIMG"
          />
          <div className={introduce_styles.section_content_self_intro}>
            <span className={introduce_styles.self_introduction_nickname}>
              {userData.nickname}
            </span>
            <span className={introduce_styles.self_introduction_content}>
              {userData.self_introduction}
            </span>
          </div>
        </div>
        <div className={introduce_styles.section_title}>Career</div>
        <div
          className={introduce_styles.section_content}
          style={{ flexDirection: "column" }}
        >
          {userData.career.map((career) => (
            <div style={{ marginLeft: "35px", marginBottom: "10px" }}>
              {career}
            </div>
          ))}
        </div>
        <div className={introduce_styles.section_title}>Portfolio</div>
        <div className={introduce_styles.section_content}>Content</div>
      </div>
    </>
  );
};

export default IntroduceModal;
