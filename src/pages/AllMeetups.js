import MeetupList from "../components/meetups/MeetupList";
import Page from "../components/ui/Page";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "meetup 1",
    image:
      "https://smallpdf.com/assets/img/material/smallpdf-logo-large.png",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "meetup 2",
    image:
      "https://smallpdf.com/assets/img/material/smallpdf-logo-large.png",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m3",
    title: "meetup 3",
    image:
      "https://smallpdf.com/assets/img/material/smallpdf-logo-large.png",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m4",
    title: "meetup 4",
    image:
      "https://smallpdf.com/assets/img/material/smallpdf-logo-large.png",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m5",
    title: "meetup 5",
    image:
      "https://smallpdf.com/assets/img/material/smallpdf-logo-large.png",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <Page>
        <h1>All Meetups Page</h1>
        <MeetupList meetups={DUMMY_DATA} />
      </Page>
    </section>
  );
}

export default AllMeetupsPage;
