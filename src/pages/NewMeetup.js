import NewMeetupForm from "../components/meetups/NewMeetupForm";
import Page from "../components/ui/Page";
import { useHistory } from "react-router-dom";

function NewMeetupPage(props) {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-e49b7-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      if (response.ok) {
        history.replace("/");
      } else {
        console.warn("probleme, n'a pas pu être enregistré en base");
      }
    });
  }

  return (
    <section>
      <Page>
        <h2>New Meetup Page</h2>
        <NewMeetupForm onAddMeetup={addMeetupHandler} darkMode={props.darkMode} />
      </Page>
    </section>
  );
}

export default NewMeetupPage;
