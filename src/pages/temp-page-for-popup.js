import Modal from "@/components/Modal";
import SuspendCourse from "@/components/SuspendCourse";
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
          <SuspendCourse courseId={1} />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default tempPageForPopup;
