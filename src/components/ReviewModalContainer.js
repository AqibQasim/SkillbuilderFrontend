// import React, { useRef, useEffect } from 'react';

// const ReviewModalContainer = ({onClose, children, title}) => {
//     const modalRef = useRef(null);

//     const handleCloseClick = (e) => {
//         e.preventDefault();
//         onClose();
//     };

//     useEffect(() => {
//         const handleEscape = (event) => {
//         if (event.key === 'Escape') {
//             onClose();
//         }
//         };

//         // Add event listener for ESC key press to close modal
//         document.addEventListener('keydown', handleEscape);

//         // Cleanup function to remove event listener on unmount
//         return () => document.removeEventListener('keydown', handleEscape);
//     }, [onClose]);
    
//     return (
//     <div ref={modalRef}>
//         <div className="modal-overlay">
//             <div className="modal-wrapper">
//                 <div className="modal">
//                     <div className="modal-header">
//                         <a href="#" onClick={handleCloseClick}>
//                         x
//                         </a>
//                     </div>
//                     {title 
//                         && 
//                         <h1>{title}</h1>
//                     }
//                     <div className="modal-body">
//                         {/* {children} */}
//                         <p>I Am Rayyan Sajid!!!</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default ReviewModalContainer

// // const Modal = ({ onClose, children, title }) => {
// //   const modalRef = useRef(null);

// //   const handleCloseClick = (e) => {
// //     e.preventDefault();
// //     onClose();
// //   };

// //   useEffect(() => {
// //     const handleEscape = (event) => {
// //       if (event.key === 'Escape') {
// //         onClose();
// //       }
// //     };

// //     // Add event listener for ESC key press to close modal
// //     document.addEventListener('keydown', handleEscape);

// //     // Cleanup function to remove event listener on unmount
// //     return () => document.removeEventListener('keydown', handleEscape);
// //   }, [onClose]);

// //   return (
// //     <div ref={modalRef}>
// //       <div className="modal-overlay">
// //         <div className="modal-wrapper">
// //           <div className="modal">
// //             <div className="modal-header">
// //               <a href="#" onClick={handleCloseClick}>
// //                 x
// //               </a>
// //             </div>
// //             {title && <h1>{title}</h1>}
// //             <div className="modal-body">{children}</div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Modal;

// // export default class MyDocument extends NextDocument {
// //     render() {
// //       return (
// //         <html>
// //           <head />
// //           <body>
// //             {/* Render your main app content here */}
// //             <div id="modal-root" /> {/* Create the modal root element */}
// //             {super.render()}
// //           </body>
// //         </html>
// //       );
// //     }
// //   }

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
