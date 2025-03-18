import { useRouter } from "next/router";
import LayoutWidth from "@/components/LayoutWidth";
import Footer from "@/components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { fetchOneCourse } from "../../../redux/thunks/coursesThunks";
import SkillBuilderSvg from "@/components/SkillBuilderSvg";
import Image from "next/image";
import { fetchOneInstructor } from "../../../redux/thunks/instructorThunk";
import { fetchOneUser } from "../../../redux/thunks/userInfoThunk";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import HomePageNavbar from "@/components/HomePageNavbar";

function CertificatePage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const certificateRef = useRef(null); // Reference to the certificate div
  const { id } = router.query; // Get the course ID from the URL
  const userId = useSelector((state) => state.auth.user);

  const { data: course, courseLoading } = useSelector(
    (state) => state.singleCourse || { data: [], courseLoading: true },
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchOneCourse(id));
    }
  }, [id, dispatch]);

  const instructor = useSelector((state) => state.singleInstructor);

  useEffect(() => {
    if (course?.instructor_id) {
      dispatch(fetchOneInstructor(course.instructor_id));
    }
  }, [course.instructor_id, dispatch]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (userId) {
      const fetchUser = async () => {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/user/${userId}`,
          );
          if (!res.ok) {
            throw new Error("Failed to fetch user");
          }
          const data = await res.json();
          console.log("Fetched user:", data);
          setUser(data?.message);
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      };

      fetchUser();
    }
  }, [userId]);

  useEffect(() => {
    if (user) {
      console.log("useriss: ", user?.userData);
    }
  }, [user]);

  const downloadAsJPG = () => {
    if (!certificateRef.current) return;

    // Temporarily increase width
    const originalWidth = certificateRef.current.style.width;
    certificateRef.current.style.width = "110%"; // Increase content width

    html2canvas(certificateRef.current, {
      scale: 3, // Higher scale for better quality
      useCORS: true,
      backgroundColor: null, // Transparent background
    }).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/jpeg", 0.5);
      link.download = "certificate.jpg";
      link.click();

      // Revert back to original width after download
      certificateRef.current.style.width = originalWidth;
    });
  };

  const downloadAsPDF = () => {
    if (!certificateRef.current) return;

    html2canvas(certificateRef.current, {
      scale: 3, // Higher resolution
      useCORS: true,
      backgroundColor: null, // Ensures transparency
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Adjust image to fit within the A4 landscape dimensions
      const imgWidth = pdfWidth - 20; // Leave some margin
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Ensure image fits within the PDF's height
      const finalHeight = Math.min(imgHeight, pdfHeight - 20);

      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, finalHeight);
      pdf.save("certificate.pdf");
    });
  };
  return (
    <>
      <HomePageNavbar />
      <div className="bg-[#F3F5FA]">
        <div className="mt-8 flex"></div>
        {/* Buttons for Download */}
        <div className="me-5 mt-8 flex justify-end space-x-4">
          <button
            className="flex justify-between space-x-10 rounded-md border-2 bg-white px-4 py-2 text-start text-blue"
            onClick={downloadAsPDF}
          >
            <span>PDF</span>
            <svg
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.65 1.39844H3.8C1.97746 1.39844 0.5 2.8759 0.5 4.69844V11.2984C0.5 13.121 1.97746 14.5984 3.8 14.5984H8.2C10.0225 14.5984 11.5 13.121 11.5 11.2984V5.24844M7.65 1.39844H8.06655C8.50416 1.39844 8.92384 1.57228 9.23327 1.88171L11.0167 3.66516C11.3262 3.9746 11.5 4.39428 11.5 4.83189V5.24844M7.65 1.39844V3.59844C7.65 4.50971 8.38873 5.24844 9.3 5.24844H11.5M2.7 6.89844H6M2.7 9.09844H9.025"
                stroke="#0038FF"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button
            className="flex justify-between space-x-10 rounded-md border-2 bg-white px-4 py-2 text-start text-blue"
            onClick={downloadAsJPG}
          >
            <span>JPG</span>
            <svg
              width="20"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.65 1.39844H3.8C1.97746 1.39844 0.5 2.8759 0.5 4.69844V11.2984C0.5 13.121 1.97746 14.5984 3.8 14.5984H8.2C10.0225 14.5984 11.5 13.121 11.5 11.2984V5.24844M7.65 1.39844H8.06655C8.50416 1.39844 8.92384 1.57228 9.23327 1.88171L11.0167 3.66516C11.3262 3.9746 11.5 4.39428 11.5 4.83189V5.24844M7.65 1.39844V3.59844C7.65 4.50971 8.38873 5.24844 9.3 5.24844H11.5M2.7 6.89844H6M2.7 9.09844H9.025"
                stroke="#0038FF"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <LayoutWidth>
          <div className="my-5 items-center justify-center">
            <div className="flex flex-row items-center justify-center gap-5">
              <div
                className="mb-5 flex h-[50%] w-[70%] justify-between border border-[#3847FF] bg-white"
                ref={certificateRef}
              >
                <div className="flex flex-col justify-between">
                  <div className="ms-5 mt-10">
                    <SkillBuilderSvg />
                  </div>
                  <div className="ms-5 mt-10 text-xs text-[#888BAA]">
                    CERTIFICATION OF COMPLETION
                  </div>
                  <div className="ms-5 max-w-screen-md text-xl font-semibold">
                    {course.title}
                  </div>
                  <div className="mb-3 ms-5 mt-8 text-xs text-[#888BAA]">
                    PROUDLY PRESENTED TO
                  </div>
                  {user && (
                    <div className="ms-5 mt-3 text-2xl font-semibold text-blue">
                      {user?.first_name} {user?.last_name}
                      <hr
                        className={`mt-2 border-t-2 w-[${user?.first_name?.length + user?.last_name?.length}rem]`}
                      />
                    </div>
                  )}
                  <div className="ms-5 mt-3 text-sm font-bold">
                    <span className="text-xs font-normal">Instructor: </span>
                    {instructor?.user?.first_name} {instructor?.user?.last_name}
                  </div>
                  <div className="mb-10 ms-5 mt-10 text-start">
                    <div className="ms-5 mt-3 text-xs font-bold">
                      August 16, 2024
                    </div>
                    <hr className="mt-2 w-32 border-t-2" />
                    <div className="ms-12 mt-3 text-xs">Date</div>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <Image src={"/blueRibbon.svg"} height={100} width={150} />
                  <div className="mb-10 me-3 text-start">
                    <div className="ms-4 mt-3 text-xs font-bold">
                      {instructor?.user?.first_name}{" "}
                      {instructor?.user?.last_name}
                    </div>
                    <hr className="mt-2 w-32 border-t-2" />
                    <div className="ms-7 mt-3 text-xs">SIGNATURE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LayoutWidth>
      </div>
      <Footer />
    </>
  );
}

export default CertificatePage;
