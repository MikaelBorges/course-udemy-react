import MeetupList from "../components/meetups/MeetupList";
import Page from "../components/ui/Page";
import { useState, useEffect } from 'react';
import styles from './AllMeetups.module.css';

const DUMMY_DATA = [
  {
    id: "m1",
    title: "meetup 1",
    image:
      "https://smallpdf.com/assets/img/material/smallpdf-logo-large.png",
    address: "Meetupstreet 5, 12345 City",
    description:
      "description 1",
  },
  {
    id: "m2",
    title: "meetup 2",
    image:
      "https://smallpdf.com/assets/img/material/smallpdf-logo-large.png",
    address: "Meetupstreet 5, 12345 City",
    description:
      "description 2",
  },
  {
    id: "m3",
    title: "meetup 3",
    image:
      "https://smallpdf.com/assets/img/material/smallpdf-logo-large.png",
    address: "Meetupstreet 5, 12345 City",
    description:
      "description 3",
  },
  {
    id: "m4",
    title: "meetup 4",
    image:
      "https://smallpdf.com/assets/img/material/smallpdf-logo-large.png",
    address: "Meetupstreet 5, 12345 City",
    description:
      "description 4",
  },
  {
    id: "m5",
    title: "meetup 5",
    image:
      "https://smallpdf.com/assets/img/material/smallpdf-logo-large.png",
    address: "Meetupstreet 5, 12345 City",
    description:
      "description 5",
  },
];

function AllMeetupsPage() {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    fetch(
      'https://react-getting-started-37f3c-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
    ).then(response => {
      return response.json();
    }).then(data => {

      console.log('datas reçues', data);

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
