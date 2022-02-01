import styles from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useContext, useState } from "react";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  const [meetupItemText, setMeetupItemText] = useState(false);
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  function addToRecycleBin(id) {
    props.removeHandle(id);
  }

  function editMeetup(id) {
    console.log("editer");
  }

  return (
    <li className={styles.meetup}>
      <Card>
        <div className={styles.meetupCard}>
          <div className={styles.meetupImagePart}>
            <div className={styles.actions}>
              <button
                className={`${styles.action} ${styles.edit}`}
                onClick={() => editMeetup(props.id)}
              >
                🖍
              </button>
              <button
                className={`${styles.action} ${styles.recycleBin}`}
                onClick={() => addToRecycleBin(props.id)}
              >
                🗑
              </button>
              <button
                className={`${styles.action} ${styles.favorite} ${
                  itemIsFavorite ? styles.activeFavorite : ""
                }`}
                onClick={toggleFavoriteStatusHandler}
              >
                🧡
              </button>
            </div>
            <img
              src={props.image}
              className={`${
                meetupItemText ? "" : styles.roundedImageMeetup
              }`}
            />
          </div>
          {meetupItemText && (
            <div
              className={styles.meetupTextPart}
            >
              <h3>{props.title}</h3>
              <address>{props.address}</address>
              <p>{props.description}</p>
            </div>
          )}
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
