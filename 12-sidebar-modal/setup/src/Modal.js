import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Modal = () => {
  const { modalIsOpen, setModalIsOpen } = useGlobalContext();

  return (
    // add show-modal class toggle
    <div className={modalIsOpen ? 'modal-overlay show-modal' : 'modal-overlay'}>
      <div className='modal-container'>
        <h3>Some modal content</h3>

        <button
          className='close-modal-btn'
          onClick={() => {
            setModalIsOpen(false);
          }}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
