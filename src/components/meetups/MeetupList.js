import MeetupItem from "./MeetupItem";
import styles from './MeetupList.module.css';

function MeetupList(props) {

  function removeHandler(id) {
    props.removeMeetup(id);
  }

  return (
    <ul className={styles.allMeetups}>
      {props.meetups.map((meetup, index) => (
        <MeetupItem
          key={index}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
          removeHandle={removeHandler}
          meetupItemText={props.cardView}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
