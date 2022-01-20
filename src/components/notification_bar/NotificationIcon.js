import { ReactComponent as Notification } from "assets/notification.svg";
import styles from "css/Navigation.module.scss";

const userNotificationNum = 3;

const NotificationIcon = ({ onNotificationBtnClick }) => {
  return (
    <div
      className={styles.notification_container}
      onClick={onNotificationBtnClick}
    >
      <Notification className={styles.notification_icon} />
      <div className={styles.notification_num}>{userNotificationNum}</div>
    </div>
  );
};

export default NotificationIcon;
