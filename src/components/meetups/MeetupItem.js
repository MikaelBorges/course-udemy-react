import styles from './MeetupItem.module.css';

function MeetupItem(props) {
  return (
    <li className={styles.meetup}>
      <div>
        <img src={props.image} />
      </div>
      <div>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div>
        <button>To Favorites</button>
      </div>
    </li>
  );
}

export default MeetupItem;
