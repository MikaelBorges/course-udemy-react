import styles from "./MeetupItem.module.css";
import Card from "../ui/Card";

function MeetupItem(props) {

  const addToFavorites = () => {
    console.log("add to favorites");
  }

  return (
    <li className={styles.meetup}>
      <Card>
        <div>
          <img src={props.image} />
        </div>
        <div>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div>
          <button onClick={addToFavorites}>To Favorites</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
