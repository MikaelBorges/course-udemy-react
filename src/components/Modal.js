import { useState } from "react";

function Modal(props) {
  const display = true;

  function cancelHandler() {
    console.log("cancel");
    props.onCancel();
  }

  function confirmHandler() {
    console.log("delete");
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
