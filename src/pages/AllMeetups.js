import MeetupList from "../components/meetups/MeetupList";
import Page from "../components/ui/Page";
import { useContext, useState, useEffect } from "react";
import styles from "./AllMeetups.module.css";
import FavoritesContext from "../store/favorites-context";

function AllMeetupsPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  const favoritesCtx = useContext(FavoritesContext);

  function meetupToRemove(id) {
    /* Supprime meetup en base */
    fetch(
      "https://react-getting-started-37f3c-default-rtdb.europe-west1.firebasedatabase.app/meetups/" +
        id +
        ".json",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      if (response.ok) {
        /* Rafraîchir la liste des meetups */
        const meetups = loadedMeetups.filter((meetup) => meetup.id !== id);
        setLoadedMeetups(meetups);
        /* Rafraîchir le menu */
        props.changeMeetups(meetups.length);
        /* Si le meetup était un favori > rafraîchir le menu */
        const itemIsFavorite = favoritesCtx.itemIsFavorite(id);
        if (itemIsFavorite) {
          favoritesCtx.removeFavorite(id);
        }
      } else {
        console.warn("probleme, non supprimé en base");
      }
    });
  }

  useEffect(() => {
    fetch(
      "https://react-getting-started-37f3c-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        /* transormation de la data reçue en tableau, sinon ça ne marche pas */
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
        props.changeMeetups(meetups.length);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <img
          className={styles.loading}
          src="https://i.stack.imgur.com/y3Hm3.gif"
        />
      </section>
    );
  }

  let content;
  if (loadedMeetups.length) {
    content = <MeetupList meetups={loadedMeetups} removeMeetup={meetupToRemove} cardView={props.cardView} />;
  } else {
    content = <p>You got no meetup yet. Start adding some ?</p>;
  }

  return (
    <section>
      <Page>
        <h1>All Meetups Page</h1>
        <div style={{backgroundColor: 'yellow', color: 'black'}}>filter zone</div>
        {content}
      </Page>
    </section>
  );
}

export default AllMeetupsPage;
