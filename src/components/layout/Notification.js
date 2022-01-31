import styles from './Notification.module.css';

function Notification(props) {
  return (
    <span className={styles.notification}>{props.totalFavs}</span>
  );
}

export default Notification;