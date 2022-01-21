import MemberPuzzleFactory from "components/project_info/MemberPuzzleFactory";
import styles from "css/ParticipantStatus.module.scss";

let participant = [
  {
    name: "코딩하는 호랑이",
    role: "FrontEnd",
    isInitiater: false,
  },
  {
    name: "공모전시러",
    role: "FrontEnd",
    isInitiater: true,
  },
  {
    name: "RetepMil",
    role: "BackEnd",
    isInitiater: false,
  },
];

const ApplicantCheck = () => {
  return (
    <>
      <div className={styles.title}>신청자 확인</div>
      <div className={styles.puzzle_container}>
        <MemberPuzzleFactory data={participant} />
      </div>
    </>
  );
};

export default ApplicantCheck;
