import styles from './NewMeetupForm.module.css';
import Card from "../ui/Card";
import { useRef } from "react";

function NewMeetupForm(props) {

  const titleInputRef = useRef(),
        imageInputRef = useRef(),
        addressInputRef = useRef(),
        descriptionInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value,
          enteredImage = imageInputRef.current.value,
          enteredAddress = addressInputRef.current.value,
          enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>

        <div>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" ref={titleInputRef} />
        </div>

        <div>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" ref={addressInputRef} />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea rows="5" id="description" ref={descriptionInputRef}></textarea>
        </div>

        <div>
          <button>Add meetup</button>
        </div>

      </form>
    </Card>
  );
}

export default NewMeetupForm;
