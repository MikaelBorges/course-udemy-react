import { useState } from "react";
import Modal from "./Modal";

function Todo(props) {
  const title = props.title;
  const [etat, setEtat] = useState(true);
  const [existance, setExistance] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModalHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  const stateHandler = () => {
    setEtat(!etat);
  };

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
            <button onClick={openModalHandler}>delete</button>
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
