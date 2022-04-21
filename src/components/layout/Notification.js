import styles from "./Notification.module.css";

function Notification(props) {
  return (
    <span
      className={`${styles.notification} ${
        props.colorOfNotification ? styles.notificationFavorite : ""
      }
      ${
        props.darkMode ? styles.notificationDark : ""
      }
      ${
        props.navReduced ? '' : styles.notificationReduced
      }`}
    >
      {props.notification}
    </span>
  );
}

export default Notification;
