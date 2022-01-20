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
    setModalIsOpen(false);
  }

  function stateHandler() {
    setEtat(!etat);
  }

  function deleteTodo() {
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
