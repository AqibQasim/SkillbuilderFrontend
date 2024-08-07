import Menus from "@/components/Menus"; // Make sure this is correct
import Modal from "@/components/Modal";
import SuspendCourse from "@/components/SuspendCourse";
import { HiPencil, HiSquare2Stack } from "react-icons/hi2";

function TempPageForPopup() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Modal>
        <Menus>
          <Menus.Menu>
            <Menus.Toggle id={1} />
            <Menus.List id={1}>
              <Menus.Button
                icon={<HiSquare2Stack />}
                onClick={() => console.log("Approving")}
                disabled={false}
              >
                Approve
              </Menus.Button>

              <Modal.Open opens="decline">
                <Menus.Button icon={<HiPencil />}>Decline</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="decline">
              <SuspendCourse courseId={1} />
            </Modal.Window>
          </Menus.Menu>
        </Menus>
      </Modal>
    </div>
  );
}

export default TempPageForPopup;
