import ButtonLarge from "@/components/ButtonLarge";
import DashboardLayout from "../../components/DashboardLayout";
import Button from "@/components/Button";

const dummyCourses = [];

function Courses() {
  return (
    <DashboardLayout>
      {!dummyCourses.length ? (
        <div className="flex size-full flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-2xl font-medium">No Courses posted yet... </h2>
          <p>
            you haven’t posted any course yet, please click the button to get
            started
          </p>
          <Button href="courseUpload" className="!px-14">
            Upload course +
          </Button>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold">Courses</h1>
          <p>This is the Courses page.</p>
        </>
      )}
    </DashboardLayout>
  );
}

export default Courses;
