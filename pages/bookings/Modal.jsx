import React from 'react';

const Modal = ({ closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Popup Content</h2>
        <p>This is the content of your popup.</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
