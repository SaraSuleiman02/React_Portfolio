import React from "react";

function Modal({ isOpen, onClose, title, description, link }) {
  if (!isOpen) return null; // Modal is not rendered when closed

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close" onClick={onClose}>
          &times;
        </button>
        <h2>{title}</h2>
        <p>{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="modal-link"
        >
          See Code!
        </a>
      </div>
    </div>
  );
}

export default Modal;