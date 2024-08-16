import DeclineCourse from "@/components/DeclineCourse";
import Menus from "@/components/Menus";
import Modal from "@/components/Modal";
import { HiCheckCircle, HiMiniNoSymbol, HiXCircle } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { statusConstants } from "../../redux/slices/courseStatusSlice";
import {
  approveCourse,
  suspendCourse,
} from "../../redux/thunks/courseStatusThunk";

function AdminCourseActions({ course, className }) {
  console.log();
  const { title, id, status } = course;
  const { statusData, loading } = useSelector((state) => state.courseStatus);
  const dispatch = useDispatch();

  const isApproved = status === "approved";
  const isDeclined = status === "declined";
  const isSuspended = status === "suspended";
  console.log("approved: ", isApproved, "2: declined: ", isDeclined);

  //   useEffect(() => {
  //     dispatch(fetchOneCourse(courseId));
  //   }, []);
  //   useEffect(() => dispatch(resetState()), []);

  const handleCourseApprove = () => {
    const dataToDispatch = {
      course_id: id,
      status: statusConstants.APPROVED,
    };
    dispatch(approveCourse(dataToDispatch));
  };

  const handleCourseSuspend = () => {
    const dataToDispatch = {
      ...statusData,
      course_id: id,
      status: statusConstants.SUSPENDED,
      reason: "Video Quality",
    };
    dispatch(suspendCourse(dataToDispatch));
  };

  return (
    <div className={`${className} class`}>
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
              <Menus.Button
                className={`suspend ${isApproved ? "!bg-pending-hover-bg !text-pending" : ""}`}
                icon={<HiMiniNoSymbol className="size-6" />}
                onClick={handleCourseSuspend}
                disabled={loading || isSuspended}
              >
                Suspend
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
              {/* <DeclineCourse courseToDecline={{ title, id, modules }} /> */}
              <DeclineCourse courseToDecline={{ title, id }} />
            </Modal.Window>
          </Menus.Menu>
        </Menus>
      </Modal>
    </div>
  );
}

export default AdminCourseActions;
