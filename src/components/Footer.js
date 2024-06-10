import React, { useEffect } from 'react';
import Image from 'next/image';
// import logo from "../../../assets/logo.png";
// import trustpilot from "../../../assets/trustpilot.png";
// import facebook from "../../../assets/facebook1.png";
// import twitter from "../../../assets/twitter.png";
// import insta from "../../../assets/insta.png";
// import Linkedin from "../../../assets/Linkedin.png";
const Footer = () => {
    useEffect(() => {
        // Create a script element
        const script = document.createElement('script');
        script.src = 'https://www.glassdoor.com/static/js/api/widget/v1.js';
        script.async = true;
        // Append the script to the body of the document
        document.body.appendChild(script);
        // Cleanup: remove the script when the component is unmounted
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <footer className="w-[100%] bg-white text-white p-4 mt-12">
            <div className="container w-[95%] mx-auto flex justify-between flex-wrap">
                {/* Left column */}
                <div className="w-[50%]  md:w-1/3 mb-4 md:mb-0">
                    <img src='/logo.svg' className='w-28' />
                    <p className='text-black mt-4'>Venture your Educational dreams. </p>
                    <div className="flex mt-4 ">
                        <a href='https://www.trustpilot.com/review/co-ventech.com' target='_blank'>
                            {/* <img src={trustpilot} alt="Trustpilot" /> */}
                        </a>
                        <a className="gdWidget" href="https://www.glassdoor.com/api/api.htm?version=1&action=employer-review&t.s=w-l&t.a=c&format=300x250&employerId=9082484" target="_gd">
                            <img alt="Find us on Glassdoor" src="https://www.glassdoor.com/pc-app/static/img/partnerCenter/badges/eng_BASIC_250x90.png" className='w-40 ml-4' />
                        </a>
                    </div>
                </div>
                <div className='flex w-[60%] justify-center'>
                    {/* <div className='w-[100%] flex justify-between '> */}
                        {/* Right columns */}
                    <div className="w-[100%] md:w-1/2 flex  justify-between gap-10">
                        {/* First column in the right side */}
                        <div className="w-full md:w-1/2 mb-4 md:mb-0 text-black">
                            <h3 className="text-lg font-semibold mb-2">Company</h3>
                            <ul className='p-2 text-gray_footer_text text-sm'>
                                <li className="mb-2">Home</li>
                                <li className="mb-2">Courses</li>   
                                <li className="mb-2">About Us</li>
                            </ul>
                        </div>
                        {/* Second column in the right side */}
                        <div className="w-[100%] md:w-1/2 ">
                            <h3 className="text-lg font-semibold mb-4 text-black">Contact Us</h3>
                            <p className='w-[100%] flex gap-3 items-center mt-2 text-gray_footer_text text-sm'><Image src='/phone.svg' width={20} height={20} />+92304-3870-323</p>
                            <p className='w-[100%] flex gap-3 items-center mt-2 text-gray_footer_text text-sm   '><Image src='/globe.svg' width={20} height={20} />info@co-ventech.com</p>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
            <div className='flex items-center flex-col'>
                <hr className="my-4 w-[90%] border-t-2 border-bottom_border_gray" />
                <div className="flex justify-between">
                    <span className='text-gray_footer_text'>© 2023 Skill Builder All rights reserved.</span>
                    <span className='flex items-center'>
                        {/* <img src={facebook} className='ml-2'/>
              <img src={twitter}  className='ml-2'/>
              <img src={insta}  className='ml-2'/>
              <img src={Linkedin}  className='ml-2'/> */}
                    </span>
                </div>
            </div>
        </footer>
    );
};
export default Footer;