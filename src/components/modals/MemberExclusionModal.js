import styles from "css/MemberExclusionModal.module.scss";
import { ReactComponent as CloseButton } from "assets/closeX.svg";

const input_data = {
  member_type: "프론트엔드",
  name: "코딩하는 호랑이",
};

const MemberExclusionModal = () => {
  const toggleModalWindow = () => {};
  return (
    <div className={styles.small_modal_container}>
      <CloseButton
        onClick={toggleModalWindow}
        style={{ position: "absolute", top: "22px", right: "41.5px" }}
      />
      <div className={styles.text_container}>
        {input_data.member_type} <b>{input_data.name}</b>
        님을 팀에서 제외하시겠습니까?
      </div>
      <div className={styles.exclude_btn}>예, 제외하겠습니다.</div>
    </div>
  );
};

export default MemberExclusionModal;
