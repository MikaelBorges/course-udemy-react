import { useState } from "react";
import Modal from "./Modal";

function Todo(props) {
  const title = props.title;
  const [etat, setEtat] = useState(false);
  const [existance, setExistance] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    console.log("display modal");
    setModalIsOpen(false);
  }

  function stateHandler() {
    console.log("on off");
    setEtat(!etat);
  }

  function deleteTodo() {
    console.log("delete todo");
    setExistance(false);
  }

  return (
    <>
      {existance && (
        <div className={`card ${etat ? "active" : ""}`}>
          <h2>{title}</h2>
          <div>
            <button onClick={stateHandler}>on/off</button>
            <button onClick={deleteHandler}>delete</button>
          </div>
          {modalIsOpen && (
            <Modal onCancel={closeModalHandler} onConfirm={deleteTodo} />
          )}
        </div>
      )}
    </>
  );
}

export default Todo;
