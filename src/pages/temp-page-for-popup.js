import DeclineCourse from "@/components/DeclineCourse";
import Menus from "@/components/Menus";
import Modal from "@/components/Modal";
import { useEffect } from "react";
import { HiCheckCircle, HiPencil, HiXCircle } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneCourse } from "../../redux/thunks/coursesThunks";
import { statusConstants } from "../../redux/slices/courseStatusSlice";
import { approveCourse } from "../../redux/thunks/courseStatusThunk";

function TempPageForPopup() {
  const { statusData, loading, error, successMessage } = useSelector(
    (state) => state.courseStatus,
  );
  const dispatch = useDispatch();
  console.log("status Data indaRow", statusData);
  // temp the course should be availabe inside the row where this Menu is suppose to render
  useEffect(function () {
    // dispatch(fetchOneCourse(courseId))
    dispatch(fetchOneCourse(1));
  });

  function handleCourseApprove() {
    console.log("approving");
    const dataToDispatch = {
      ...statusData,
      course_id: 1,
      status: statusConstants.APPROVED,
    };
    console.log("this will dispatch", dataToDispatch);

    dispatch(approveCourse(dataToDispatch));
  }
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Modal>
        <Menus>
          <Menus.Menu>
            {/* <Menus.Toggle id={courseId} /> */}
            <Menus.Toggle id={1} />
            {/* <Menus.List id={courseId}> */}
            <Menus.List id={1}>
              <Menus.Button
                className="approve"
                // icon={<HiSquare2Stack />}
                icon={<HiCheckCircle className="size-6" />}
                onClick={handleCourseApprove}
                disabled={false}
              >
                Approve
              </Menus.Button>

              <Modal.Open opens="decline">
                <Menus.Button
                  className="decline"
                  icon={<HiXCircle className="size-6" />}
                >
                  Decline
                </Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="decline">
              <DeclineCourse courseId={1} />
            </Modal.Window>
          </Menus.Menu>
        </Menus>
      </Modal>
    </div>
  );
}

export default TempPageForPopup;
