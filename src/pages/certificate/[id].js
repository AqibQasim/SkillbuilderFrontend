import { useRouter } from 'next/router';
import LayoutWidth from '@/components/LayoutWidth';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { fetchOneCourse } from "../../../redux/thunks/coursesThunks";
import SkillBuilderSvg from '@/components/SkillBuilderSvg';
import Image from 'next/image';
import { fetchOneInstructor } from '../../../redux/thunks/instructorThunk';
import { fetchOneUser } from '../../../redux/thunks/userInfoThunk';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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

  const user = useSelector((state) => state.singleUser);

  useEffect(() => {
    if (userId) {
      dispatch(fetchOneUser(userId));
    }
  }, [userId, dispatch]);

  const downloadAsJPG = () => {
    html2canvas(certificateRef.current).then(canvas => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/jpeg', 1.0);
      link.download = 'certificate.jpg';
      link.click();
    });
  };

  const downloadAsPDF = () => {
    html2canvas(certificateRef.current).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape');
      pdf.addImage(imgData, 'PNG', 0, 0, 297, 210); // Adjust width and height for landscape
      pdf.save('certificate.pdf');
    });
  };

  return (
    <>
      <Navbar />
      <LayoutWidth>
        <div className="my-10 justify-center items-center">
          <div className='flex flex-row justify-center items-center'>
            <div className='flex justify-between border-2 h-2/4 w-7/12' ref={certificateRef}>
              <div>
                <div className='mt-10 ms-2'>
                  <SkillBuilderSvg />
                </div>
                <div className='text-xs mt-10 ms-3 text-[#888BAA]'>
                  CERTIFICATION OF COMPLETION
                </div>
                <div className='text-4xl font-semibold ms-3'>
                  {course.title}
                </div>
                <div className='text-xs mt-3 ms-3 mt-8 mb-3 text-[#888BAA]'>
                  PROUDLY PRESENTED TO
                </div>
                {user && (
                  <div className="text-blue text-2xl mt-3 ms-3 font-semibold">
                    {user.userData.first_name} {user.userData.last_name}
                    <hr />
                  </div>
                )}
                <div className='text-sm mt-3 ms-3 font-bold'>
                  <span className='text-xs font-normal'>Instructor:</span> 
                  {instructor?.user?.first_name} {instructor?.user?.last_name}
                </div>
                <div className='text-start ms-3 mt-24'>
                  <div className='text-xs mt-3 ms-3 mt-3 mb-2 font-bold ms-5'>
                    August 16, 2024
                  </div>
                  <hr className='w-32' />
                  <div className='text-xs mt-3 ms-10'>Date</div>
                </div>
              </div>
              <div>
                <Image src={"/blueRibbon.svg"} height={100} width={150} fetchpriority="high" />
                <div className='text-start my-20'>
                  <div className='text-xs mt-3 mb-2 font-bold ms-5'>Awarder</div>
                  <hr className='w-32' />
                  <div className='text-xs mt-3 ms-5'>SIGNATURE</div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons for Download */}
          <div className="mt-8 flex justify-center space-x-4">
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded-md" 
              onClick={downloadAsPDF}
            >
              Download as PDF
            </button>
            <button 
              className="bg-green-500 text-white px-4 py-2 rounded-md" 
              onClick={downloadAsJPG}
            >
              Download as JPG
            </button>
          </div>

          <Footer />
        </div>
      </LayoutWidth>
    </>
  );
}

export default CertificatePage;
