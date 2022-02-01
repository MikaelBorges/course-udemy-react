import MeetupList from "../components/meetups/MeetupList";
import Page from "../components/ui/Page";
import { useState, useEffect } from "react";
import styles from "./AllMeetups.module.css";

function AllMeetupsPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  function meetupToRemove(id) {
    /* Supprime un meetup */
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
    ).then((response) => {
      if (response.ok) {
        /* Rafraîchir la vue */
        const meetups = loadedMeetups.filter((meetup) => meetup.id !== id);
        setLoadedMeetups(meetups);
        props.changeMeetups(meetups.length);
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

  return (
    <section>
      <Page>
        <h1>All Meetups Page</h1>
        <MeetupList meetups={loadedMeetups} removeMeetup={meetupToRemove} />
      </Page>
    </section>
  );
}

export default AllMeetupsPage;
