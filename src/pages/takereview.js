import ReviewModal from '@/components/ReviewModal';
import StarRating from '@/components/StarRating';
import ReviewModalContainer from "@/components/ReviewModalContainer";
import React, { useState } from 'react';

const takereview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='w-full'>
      <h1>Home Page</h1>
      <button onClick={openModal}>Open Modal</button>
      <ReviewModalContainer isOpen={isModalOpen} onClose={closeModal}>
        <ReviewModal onClose={closeModal}/>
      </ReviewModalContainer>
    </div>
  )
}

export default takereview

// pages/index.js
// import Modal from '../components/Modal';

// const HomePage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <button onClick={openModal}>Open Modal</button>
//       <Modal isOpen={isModalOpen} onClose={closeModal}>
//         <h2>Modal Title</h2>
//         <p>This is the modal content.</p>
//       </Modal>
//     </div>
//   );
// };

// export default HomePage;
