import { useState } from "react";
import formatDate from "@/utils/formatDate";
import { useRouter } from "next/router";
import Avatar from "./Avatar";
import ButtonCircle from "./ButtonCircle";
import ChevronRightIconSvg from "./ChevronRightIconSvg";
import Table from "./Table";

function AdminInstructorsRow({ isSpecific, instructor }) {
  const router = useRouter();
  const { id, first_name, last_name, email, created_at, courseProgress } =
    instructor.user;

  // Initialize local state for checkboxes
  const [permissions, setPermissions] = useState({
    courses_rights: instructor.user.courses_rights,
    live_session_rights: instructor.user.live_session_rights,
    career_counselling_rights: instructor.user.career_counselling_rights,
  });
  const token= localStorage.getItem('adminToken')

  const changePermission = async (key, value) => {
    // Update state
    setPermissions((prev) => ({
      ...prev,
      [key]: value,
    }));

    // Verify whether the status is changing or not
    //console.log("Instructor ID:", , "Key:", key, "New Value:", value);
 
    // Here, you can make an API call to update the backend
    // Verify whether the status is changing or not
    const updateRightsAPI = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/update-instructor-rights`,
      {
        method: "PATCH",
        headers:{
          "Content-Type": "application/json",
          authorization:`Bearer ${token}`
        },
        body: JSON.stringify({
          instructor_id: id,
          rights: {
            [key]:value
          },
        }),
      },
    );

    if (updateRightsAPI?.ok) {
      console.log(await updateRightsAPI.json());
    }
  };


  const handleRowClick = () => {
    try {
      if (instructor?.id) {
        router.push(`/admin/instructors/${instructor.id}`);
      } else {
        throw new Error("Instructor ID is not defined");
      }
    } catch (error) {
      alert(
        "Unable to navigate to the instructor page. Please try again later.",
      );
    }
  };

  return (
    <Table.Row>
      <div
        onClick={handleRowClick}
        className="image-wrapper relative aspect-square h-10 w-10 overflow-hidden rounded-full"
      >
        <Avatar
          firstName={first_name}
          lastName={last_name}
          className="h-full w-full rounded-full object-cover"
        />
      </div>
      <div
        onClick={handleRowClick}
        className="name"
      >{`${first_name} ${last_name}`}</div>
      <div onClick={handleRowClick} className="email">
        {email}
      </div>
      <div onClick={handleRowClick} className="course-progress">
        {isSpecific ? `${courseProgress}%` : formatDate(created_at)}
      </div>

      {/* Checkbox Inputs */}
      <input
        type="checkbox"
        checked={permissions.courses_rights}
        onChange={() =>
          changePermission("courses_rights", !permissions.courses_rights)
        }
      />
      <input
        type="checkbox"
        checked={permissions.live_session_rights}
        onChange={() =>
          changePermission(
            "live_session_rights",
            !permissions.live_session_rights,
          )
        }
      />
      <input
        type="checkbox"
        checked={permissions.career_counselling_rights}
        onChange={() =>
          changePermission(
            "career_counselling_rights",
            !permissions.career_counselling_rights,
          )
        }
      />

      <ButtonCircle
        clasName="justify-self-end"
        role="link"
        onClick={handleRowClick}
      >
        <ChevronRightIconSvg
          className="relative -right-[1.5px] h-4 w-4 transition-transform duration-300 group-hover:-rotate-45"
          currentColor
        />
      </ButtonCircle>
    </Table.Row>
  );
}

export default AdminInstructorsRow;
