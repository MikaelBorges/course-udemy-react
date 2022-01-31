import styles from './Notification.module.css';

function Notification(props) {
  return (
    <span className={styles.notification}>{props.notification}</span>
  );
}

export default Notification;