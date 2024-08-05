import Modal from "@/components/Modal";
import { HiEllipsisHorizontal } from "react-icons/hi2";

function tempPageForPopup() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Modal>
        <Modal.Open opens="actions-popup">
          <button className="popup">
            {" "}
            <HiEllipsisHorizontal className="size-6" />{" "}
          </button>
        </Modal.Open>
        <Modal.Window name="actions-popup">
          <ModalContent />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default tempPageForPopup;

function ModalContent({ onClose }) {
  return (
    <div>
      <h1>Modal Title</h1>
      <p>This is the modal content.</p>
      <button onClick={onClose}>Close Modal</button>
    </div>
  );
}
