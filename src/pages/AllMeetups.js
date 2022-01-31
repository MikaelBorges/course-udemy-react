import MeetupList from "../components/meetups/MeetupList";
import Page from "../components/ui/Page";
import { useState, useEffect } from 'react';
import styles from './AllMeetups.module.css';

function AllMeetupsPage(props) {

  function meetupsHandler(meetups) {
    props.changeMeetups(meetups);
  }

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    fetch(
      'https://react-getting-started-37f3c-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
    ).then(response => {
      return response.json();
    }).then(data => {

      /* console.log('datas reçues', data); */

      {/* transormation de la data reçue en tableau */}
      const meetups = [];
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        };
        meetups.push(meetup);
      }

      setIsLoading(false);
      setLoadedMeetups(meetups);
      meetupsHandler(meetups.length);

    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <img className={styles.loading} src="https://i.stack.imgur.com/y3Hm3.gif" />
      </section>
    );
  }

  return (
    <section>
      <Page>
        <h1>All Meetups Page</h1>
        <MeetupList meetups={loadedMeetups} />
      </Page>
    </section>
  );
}

export default AllMeetupsPage;
