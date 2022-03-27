import styles from "./Notification.module.css";

function Notification(props) {
  return (
    <span
      className={`${styles.notification} ${
        props.colorOfNotification ? styles.notificationFavorite : ""
      } ${
        props.navReduced ? '' : styles.notificationReduced
      }`}
    >
      {props.notification}
    </span>
  );
}

export default Notification;
