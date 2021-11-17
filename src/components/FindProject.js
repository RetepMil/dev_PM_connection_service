import { useState } from "react";
import { ReactComponent as SearchBtn } from "../assets/search_btn.svg";
import styles from "../css/FindProject.module.scss";
import Modal from "./Modal";
import ProjectPreview from "./ProjectPreview";

let dummy_data = [
  {
    name: "피드백 보관 플랫폼 #posTree",
    image: "1.png",
  },
  {
    name: "ArtRecipe: 예술작품 - 재료정보 공유 플랫폼",
    image: "2.png",
  },
  {
    name: "PODO. 학습 목적의 영상 모음 웹사이트",
    image: "3.png",
  },
  {
    name: "BookItOut: 고려대학교 학부생의 원활한 지식 정보 자료 이용을 위한 서비스",
    image: "4.png",
  },
  {
    name: "목소리로 만나는 대학친구! 통화링",
    image: "5.png",
  },
  {
    name: "모의 담금질 기법 시각화",
    image: "6.png",
  },
  {
    name: "Borrow Go! 대학교 내 물건 대여 시스템",
    image: "7.png",
  },
  {
    name: "고려대학교 스마트캠퍼스 커넥터 - 안전한 연구실 Wb-App",
    image: "8.png",
  },
  {
    name: "오늘 뭐 먹지? 음식선호도 조사 후 인공지능이 추천",
    image: "9.png",
  },
];

const FindProject = () => {
  const [searchText, setSearchText] = useState("");
  const [isModalOn, setIsModalOn] = useState(true);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setSearchText(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className={styles.search_filter_container}>
        <form onSubmit={onSubmit}>
          <input
            className={styles.search_textbox}
            type="text"
            placeholder="search"
            onChange={onChange}
          />
          <button className={styles.search_btn}>
            <SearchBtn />
          </button>
        </form>
      </div>
      <div className={styles.board_container}>
        <div className={styles.board_subcontainer}>
          <div className={styles.board_projects_for_you}>Projects for you!</div>
          <div className={styles.board_contents}>
            {dummy_data.map((item) => (
              <ProjectPreview item={item} />
            ))}
          </div>
          <div className={styles.board_page_numbers}>1 2 3 4 5 {">"}</div>
        </div>
      </div>
      {isModalOn ? (
        <Modal modalTypeInput="TechStack" setIsModalOn={setIsModalOn} />
      ) : null}
    </>
  );
};

export default FindProject;
