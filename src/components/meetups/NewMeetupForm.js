import styles from './NewMeetupForm.module.css';
import Card from "../ui/Card";
import { useRef } from "react";

function NewMeetupForm() {

  const titleInputRef = useRef(),
        imageInputRef = useRef(),
        addressInputRef = useRef(),
        descriptionInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value,
          enteredImage = imageInputRef.current.value,
          enteredAddress = addressInputRef.current.value,
          enteredDescription = descriptionInputRef.current.value,

    meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription
    }

    console.log("meetupData", meetupData);
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>

        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>

        <div className={styles.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>

        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>

        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea rows="5" required id="description" ref={descriptionInputRef}></textarea>
        </div>

        <div className={styles.actions}>
          <button>Add meetup</button>
        </div>

      </form>
    </Card>
  );
}

export default NewMeetupForm;
