import styles from "css/NoticeModal.module.scss";
import NotificationItem from "./NotificationItem";

const userNotificationExamples = [
  {
    title: "피드백 보관 플랫폼 #posTree",
    content:
      "백엔드 [초보개발자] 님의 지원서가 도착했습니다! 안녕하세요 평소 생각하던 프로젝트와 유사해서 지원하게 되었습니다.",
    read: false,
  },
  {
    title: "ArtRecipe: 예술작품 · 재료정보 공유 플랫폼",
    content:
      "프론트엔드 개발자로 스카우트 되었습니다! 포트폴리오 인상 깊게 보았습니다. 프로젝트를 함께하고 싶어요.",
    read: false,
  },
  {
    title: "ArtRecipe: 예술작품 · 재료정보 공유 플랫폼",
    content: "프로젝트에 디자이너로 참여하게 되었습니다!",
    read: true,
  },
  {
    title: "ArtRecipe: 예술작품 · 재료정보 공유 플랫폼",
    content: "프로젝트에 디자이너로 참여하게 되었습니다!",
    read: true,
  },
];

const NoticeModal = () => {
  return (
    <>
      <div className={styles.modal_title}>Notice</div>
      <div className={styles.notification_container}>
        {userNotificationExamples.map((itemData) => (
          <NotificationItem itemData={itemData} />
        ))}
      </div>
    </>
  );
};

export default NoticeModal;
