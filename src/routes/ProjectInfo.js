import { useEffect, useState } from "react";
import styles from "../css/ProjectInfo.module.scss";
import { ReactComponent as PrevArrowMyProject } from "../assets/prevArrowMyProject.svg";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import MemberPuzzleFactory from "components/project_info/MemberPuzzleFactory";
import Modal from "components/Modal";

//Temporary setting
let userID = "lkslyj2";
let loginUserID = "lkslyj2";
let projectData = {
  title: "피드백 보관 플랫폼 #posTree",
  subtitle: "피드백 교환 플랫폼 포스트리입니다.",
  status: true,
  brief_introduction:
    "posTree는 언제나 프로젝트와 함께합니다. 현재 진행 중인 Devkor hackthon을 포함한 대부분의 프로젝트는 웹에서 이뤄집니다. 따라서 웹사이트를 통해 posTree를 구현하였습니다. 또한 프로젝트 하위의 팀, 그리고 팀 간의 피드백이라는 다소 복잡한 구조를 forest와 tree , 그리고 post를 전달하는 messenger 개념을 적용하여 보다 직관적으로 구조를 이해하도록 하였습니다. 이러한 개념을 그래픽화하여 프로그램에 적용하여 유저가 보다 쉽게 구조를 이해하고 사용할 수 있도록 하였습니다.",
  content: "<div>get data from server</div>",
};
let participant = [
  {
    name: "나노로봇",
    role: "PM",
    isInitiater: true,
  },
  {
    name: "코딩하는 호랑이",
    role: "Designer",
    isInitiater: false,
  },
  {
    name: "공모전시러",
    role: "FrontEnd",
    isInitiater: true,
  },
  {
    name: "박카스100",
    role: "FrontEnd",
    isInitiater: false,
  },
  {
    name: "RetepMil",
    role: "BackEnd",
    isInitiater: false,
  },
];

const ProjectInfo = ({ projectID /*, userID , loginUserID*/ }) => {
  const [isAuthor, setIsAuthor] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuthor(userID === loginUserID);
    //projectData = axios.get(projectID)
  }, []);

  const onParticipantStatusClick = () => {
    setModalType("ParticipantStatus");
    setShowModal(true);
  };
  const onApplicantCheckClick = () => {
    setModalType("ApplicantCheck");
    setShowModal(true);
  };

  return (
    <>
      {showModal ? (
        <Modal modalTypeInput={modalType} setIsModalOn={setShowModal} />
      ) : null}
      <div className={styles.project_info_container}>
        {isAuthor ? (
          <div className={styles.control_menu}>
            <div
              className={styles.menu_block}
              onClick={() => setEditMode(true)}
            >
              수정
            </div>
            <div
              className={styles.menu_block}
              onClick={onParticipantStatusClick}
            >
              지원자
              <br />
              현황
            </div>
            <div className={styles.menu_block} onClick={onApplicantCheckClick}>
              신청
              <br />
              확인
            </div>
          </div>
        ) : null}
        <div
          className={styles.go_back_to_my_project_btn}
          onClick={() => navigate(-1)}
        >
          <PrevArrowMyProject style={{ marginRight: "25px" }} />
          <span>My Project</span>
        </div>
        <div className={styles.content_container}>
          <img
            width="800px"
            height="500px"
            alt="project_img"
            src={process.env.PUBLIC_URL + `/img/ProjectInfo/${"1.png"}`}
          />
          <div className={styles.project_title}>
            {id}
            {projectData.title}
          </div>
          <div className={styles.project_recruiting_status_banner}>
            {projectData.status ? "Still Recruiting" : "Recruiting Ended"}
            <div
              className={styles.status_banner_circles}
              style={{
                backgroundColor: "rgba(2, 117, 252, 0.6)",
                top: "-8px",
                right: "-37px",
              }}
            />
            <div
              className={styles.status_banner_circles}
              style={{
                backgroundColor: "rgba(2, 117, 252, 0.6)",
                top: "8px",
                left: "-25px",
              }}
            />
            <div
              className={styles.status_banner_circles}
              style={{
                backgroundColor: "rgba(255, 167, 167, 0.47)",
                top: "-15px",
                left: "-38px",
              }}
            />
          </div>
          <div className={styles.project_current_member_container}>
            <MemberPuzzleFactory data={participant} />
          </div>
          <div className={styles.project_subtitle}>{projectData.subtitle}</div>
          <div className={styles.project_brief_introduction}>
            {projectData.brief_introduction}
          </div>
          <div className={styles.project_info_content_divider}></div>
          <div className={styles.project_content}>{projectData.content}</div>
          {editMode ? (
            <div className={styles.save_btn} onClick={() => setEditMode(false)}>
              SAVE
            </div>
          ) : null}
          <div className={styles.footer}>
            <span>Updates</span>
            <span>About</span>
            <span>Terms</span>
            <span>Privacy</span>
            <span>Site Notice</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectInfo;
