import React from 'react';
import { FaTimes } from 'react-icons/fa';
const Modal = () => {
  return (
    // add show-modal class toggle
    <div className={`modal-overlay `}>
      <div className='modal-container'>
        <h3>Some modal content</h3>

        <button className='close-modal-btn'>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
