import { useState } from "react";

function Modal(props) {
  const title = props.title;
  const [etat, setEtat] = useState(false);

  function modalHandler() {
    console.log("close modal");
  }

  function stateHandler() {
    console.log("on off");
    setEtat(!etat);
  }

  return (
    <div className={`modal ${etat ? "active" : ""}`}>
      <div className={`question`}>
        <p>sure ?</p>
        <button onClick={modalHandler}>no</button>
        <button onClick={modalHandler}>yes</button>
      </div>
    </div>
  );
}

export default Modal;
