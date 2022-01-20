import styles from "css/NoticeModal.module.scss";

const NotificationItem = ({ itemData }) => {
  return (
    <div className={styles.notification_item_container}>
      <div className={styles.notification_item_title}>{itemData.title}</div>
      <div className={styles.notification_item_content}>{itemData.content}</div>
    </div>
  );
};

export default NotificationItem;
