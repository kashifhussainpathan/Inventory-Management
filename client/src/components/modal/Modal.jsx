import React from "react";
import "./modal.css";

function Modal({ children, closeModal }) {
  return (
    <>
      <div className="overlay" onClick={closeModal}></div>
      <div className="modal">{children}</div>
    </>
  );
}

export default Modal;
