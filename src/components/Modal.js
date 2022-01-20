import { useState } from "react";

function Modal(props) {
  const display = true;

  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className={`modal`} onClick={cancelHandler}>
      <div className={`question`}>
        <p>sure ?</p>
        <button onClick={cancelHandler}>no</button>
        <button onClick={confirmHandler}>yes</button>
      </div>
    </div>
  );
}

export default Modal;
