import styles from './NewMeetupForm.module.css';
import Card from "../ui/Card";

function NewMeetupForm() {
  return (
    <Card>
      <form className={styles.form}>

        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" />
        </div>

        <div className={styles.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" />
        </div>

        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" />
        </div>

        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea rows="5" required id="description"></textarea>
        </div>

        <div className={styles.actions}>
          <button>Add meetup</button>
        </div>

      </form>
    </Card>
  );
}

export default NewMeetupForm;
