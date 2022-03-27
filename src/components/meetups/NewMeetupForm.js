import styles from './NewMeetupForm.module.css';
import Card from "../ui/Card";
import { useRef, useState} from "react";

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

  const [titleLabelAnimated, setTitleLabelAnimated] = useState(false);
  const [imageLabelAnimated, setImageLabelAnimated] = useState(false);
  const [addressLabelAnimated, setAddressLabelAnimated] = useState(false);
  const [descriptionLabelAnimated, setDescriptionLabelAnimated] = useState(false);

  function handleTitleField() {
    setTitleLabelAnimated(true);
  }

  function handleImageField() {
    setImageLabelAnimated(true);
  }

  function handleAddresssField() {
    setAddressLabelAnimated(true);
  }

  function handleDescriptionField() {
    setDescriptionLabelAnimated(true);
  }

  return (
    <Card>
      <form
        className={`${styles.form} ${
          props.darkMode ? styles.darkMode : ""
        }`}
        onSubmit={submitHandler}
      >

        <div className={styles.blockField}>
          <label
            htmlFor="title"
            className={`${
              titleLabelAnimated ? styles.animated : ""
            }`}
          >
            Title
          </label>
          <input onClick={handleTitleField} type="text" id="title" ref={titleInputRef} />
        </div>

        <div className={styles.blockField}>
          <label
            htmlFor="image"
            className={`${
              imageLabelAnimated ? styles.animated : ""
            }`}
          >
            Image
          </label>
          <input onClick={handleImageField} type="url" required id="image" ref={imageInputRef} />
        </div>

        <div className={styles.blockField}>
          <label
            htmlFor="address"
            className={`${
              addressLabelAnimated ? styles.animated : ""
            }`}
          >
            Address
          </label>
          <input onClick={handleAddresssField} type="text" id="address" ref={addressInputRef} />
        </div>

        <div className={styles.blockField}>
          <label
            htmlFor="description"
            className={`${
              descriptionLabelAnimated ? styles.animated : ""
            }`}
          >
            Description
          </label>
          <textarea onClick={handleDescriptionField} rows="6" id="description" ref={descriptionInputRef}></textarea>
        </div>

        <button className={styles.addMeetup}>📤</button>

      </form>
    </Card>
  );
}

export default NewMeetupForm;
