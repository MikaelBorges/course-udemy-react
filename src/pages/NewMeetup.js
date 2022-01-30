import NewMeetupForm from "../components/meetups/NewMeetupForm";
import Page from "../components/ui/Page";

function NewMeetupPage() {
  return (
    <section>
      <Page>
        <h1>All Meetups Page</h1>
        <NewMeetupForm />
      </Page>
    </section>
  );
}

export default NewMeetupPage;
