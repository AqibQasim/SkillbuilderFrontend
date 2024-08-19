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
           {/* Buttons for Download */}
           <div className="mt-8 flex justify-end space-x-4 me-5">
            <button 
              className="bg-white text-blue px-4 py-2 rounded-md border-2 text-start flex justify-between space-x-10" 
              onClick={downloadAsPDF}
            >
              <span>PDF</span>
              <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.65 1.39844H3.8C1.97746 1.39844 0.5 2.8759 0.5 4.69844V11.2984C0.5 13.121 1.97746 14.5984 3.8 14.5984H8.2C10.0225 14.5984 11.5 13.121 11.5 11.2984V5.24844M7.65 1.39844H8.06655C8.50416 1.39844 8.92384 1.57228 9.23327 1.88171L11.0167 3.66516C11.3262 3.9746 11.5 4.39428 11.5 4.83189V5.24844M7.65 1.39844V3.59844C7.65 4.50971 8.38873 5.24844 9.3 5.24844H11.5M2.7 6.89844H6M2.7 9.09844H9.025" stroke="#0038FF" strokeLinecap="round"/>
              </svg>

            </button>
            <button 
              className="bg-white text-blue px-4 py-2 rounded-md border-2 text-start flex justify-between space-x-10" 
              onClick={downloadAsJPG}
            >
              
              <span>JPG</span>
              <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.65 1.39844H3.8C1.97746 1.39844 0.5 2.8759 0.5 4.69844V11.2984C0.5 13.121 1.97746 14.5984 3.8 14.5984H8.2C10.0225 14.5984 11.5 13.121 11.5 11.2984V5.24844M7.65 1.39844H8.06655C8.50416 1.39844 8.92384 1.57228 9.23327 1.88171L11.0167 3.66516C11.3262 3.9746 11.5 4.39428 11.5 4.83189V5.24844M7.65 1.39844V3.59844C7.65 4.50971 8.38873 5.24844 9.3 5.24844H11.5M2.7 6.89844H6M2.7 9.09844H9.025" stroke="#0038FF" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
      <LayoutWidth>
        <div className="my-10 justify-center items-center">
          <div className='flex flex-row  justify-center items-center'>
            <div className='flex justify-between border border-2 h-1/3 w-8/12' ref={certificateRef}>
              <div>
                <div className='mt-10 ms-5'>
                  <SkillBuilderSvg />
                </div>
                <div className='text-xs mt-10 ms-5 text-[#888BAA]'>
                  CERTIFICATION OF COMPLETION
                </div>
                <div className='text-4xl font-semibold ms-5'>
                  {course.title}
                </div>
                <div className='text-xs mt-3 ms-5 mt-8 mb-3 text-[#888BAA]'>
                  PROUDLY PRESENTED TO
                </div>
                {user && (
                  <div className="text-blue text-2xl mt-3 ms-5 font-semibold">
                    {user.userData.first_name} {user.userData.last_name}
                    <hr />
                  </div>
                )}
                <div className='text-sm mt-3 ms-5 font-bold'>
                  <span className='text-xs font-normal'>Instructor: </span> 
                  {instructor?.user?.first_name} {instructor?.user?.last_name}
                </div>
                <div className='text-start ms-5 mt-24'>
                  <div className='text-xs mt-3 ms-5 mt-3 mb-2 font-bold'>
                    August 16, 2024
                  </div>
                  <hr className='w-32' />
                  <div className='text-xs mt-3 ms-12'>Date</div>
                </div>
              </div>
              <div>
                <Image src={"/blueRibbon.svg"} height={100} width={150}/>
                <div className='text-start my-20'>
                  <div className='text-xs mt-3 mb-2 font-bold ms-7'>Awarder</div>
                  <hr className='w-32' />
                  <div className='text-xs mt-3 ms-7'>SIGNATURE</div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </LayoutWidth>
    </>
  );
}

export default CertificatePage;
