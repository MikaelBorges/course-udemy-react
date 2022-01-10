import { useState } from "react";
import Modal from "./Modal";

function Todo(props) {
  const title = props.title;
  const [etat, setEtat] = useState(false);
  const [existance, setExistance] = useState(false);

  function deleteHandler() {
    console.log("delete");
    setExistance(!existance);
  }

  function stateHandler() {
    console.log("on off");
    setEtat(!etat);
  }

  return (
    <div className={`card ${etat ? "active" : ""}`}>
      <h2>{title}</h2>
      <div>
        <button onClick={stateHandler}>on/off</button>
        <button onClick={deleteHandler}>delete</button>
      </div>
      { existance && <Modal /> }
    </div>
  );
}

export default Todo;
