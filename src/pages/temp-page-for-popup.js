import DeclineCourse from "@/components/DeclineCourse";
import Menus from "@/components/Menus";
import Modal from "@/components/Modal";
import { useEffect } from "react";
import { HiCheckCircle, HiXCircle } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneCourse } from "../../redux/thunks/coursesThunks";
import { statusConstants } from "../../redux/slices/courseStatusSlice";
import { approveCourse } from "../../redux/thunks/courseStatusThunk";

function TempPageForPopup() {
  const { statusData, loading } = useSelector((state) => state.courseStatus);
  const { title, id, modules, status } = useSelector(
    (state) => state.singleCourse.data,
  );
  const dispatch = useDispatch();

  const isApproved = status === "approved";
  const isDeclined = status === "declined";
  console.log("approved: ", isApproved, "2: declined: ", isDeclined);

  useEffect(() => {
    dispatch(fetchOneCourse(1));
  }, [dispatch]);

  const handleCourseApprove = () => {
    const dataToDispatch = {
      ...statusData,
      course_id: id,
      status: statusConstants.APPROVED,
    };
    dispatch(approveCourse(dataToDispatch));
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Modal>
        <Menus>
          <Menus.Menu>
            <Menus.Toggle id={id} />
            <Menus.List id={id}>
              <Menus.Button
                className={`approve ${isApproved ? "!bg-approve-hover-bg !text-approve" : ""}`}
                icon={<HiCheckCircle className="size-6" />}
                onClick={handleCourseApprove}
                disabled={loading || isApproved}
              >
                Approve
              </Menus.Button>

              <Modal.Open opens="decline">
                <Menus.Button
                  className={`decline ${isDeclined ? "!bg-decline-hover-bg !text-decline" : ""}`}
                  icon={<HiXCircle className="size-6" />}
                  disabled={loading || isDeclined}
                >
                  Decline
                </Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="decline">
              <DeclineCourse courseToDecline={{ title, id, modules }} />
            </Modal.Window>
          </Menus.Menu>
        </Menus>
      </Modal>
    </div>
  );
}

export default TempPageForPopup;
