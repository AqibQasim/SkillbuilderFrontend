// components/Modal.js
import React,{useEffect} from 'react';
import styles from '../styles/modal.module.css';

const ReviewModalContainer = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
};
useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    // Add event listener for ESC key press to close modal
    document.addEventListener('keydown', handleEscape);

    // Cleanup function to remove event listener on unmount
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className={styles.overlay}>
      {/* <div className={styles.modal}> */}
        <button className={styles.closeButton} onClick={handleCloseClick}>
          &times;
        </button>
        <div className={styles.content}>{children}</div>
      {/* </div> */}
    </div>
  );
};

export default ReviewModalContainer;
