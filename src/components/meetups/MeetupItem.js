import styles from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler(e) {
    e.stopPropagation();
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

  function addToRecycleBin(e, id) {
    e.stopPropagation();
    props.removeHandle(id);
  }

  function editMeetup(e, id) {
    console.log("editer");
    e.stopPropagation();
    
  }

  function viewMeetup(id) {
    console.log("voir");
    
  }

  return (
    <li className={styles.meetup}>
      <Card darkMode={props.darkMode}>
        <div className={styles.meetupCard} onClick={() => viewMeetup(props.id)}>
          <div className={styles.meetupImagePart}>
            <div className={styles.actions}>
              <div className={styles.actionsLeft}>
                <button
                  className={styles.action}
                  onClick={(e) => editMeetup(e, props.id)}
                >
                  🖍
                </button>
                <button
                  className={styles.action}
                  onClick={(e) => addToRecycleBin(e, props.id)}
                >
                  🗑
                </button>
              </div>
              <div className={styles.actionsRight}>
                <button
                  className={`${styles.action} ${
                    itemIsFavorite ? styles.activeFavorite : ""
                  }`}
                  onClick={toggleFavoriteStatusHandler}
                >
                  ❤️
                </button>
              </div>
            </div>
            <img
              src={props.image}
              className={`${
                props.meetupItemText ? "" : styles.roundedImageMeetup
              }`}
            />
          </div>
          {props.meetupItemText && (props.title || props.address || props.description) && (
            <div
              className={`${styles.meetupTextPart} ${
                props.darkMode ? styles.darkMode : ""
              }`}
            >
              {props.title && (
                <h3 className={`${styles.meetupTextElement} ${styles.titleMeetup}`}>{props.title}</h3>
              )}

              {props.address && (
                <address className={styles.meetupTextElement}>{props.address}</address>
              )}

              {props.description && (
                <p className={styles.meetupTextElement}>{props.description}</p>
              )}
            </div>
          )}
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
