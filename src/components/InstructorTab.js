import React from 'react'
import profilesvg from "../../public/profile.svg";

const InstructorTab = (props) => {
  return (
    <div className="hidden items-center gap-0 space-x-1 w-[40%] py-5 justify-center rounded-full p-1 min-w-max self-start 
                    sm:flex sm:w-[100%]
                    md:flex md:self-center
                    lg:flex lg:self-center ">
        <div className="flex items-center justify-center  border-2 border-blue  gap-12 text-blue rounded-full min-w-max px-4 py-2 cursor-pointer">
          <span className="">{props.Tab1}</span>
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-7" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.293 9.293a1 1 0 011.414 0L10 9.586l.293-.293a1 1 0 011.414 1.414L10.414 12l.293.293a1 1 0 01-1.414 1.414L10 12.414l-.293.293a1 1 0 01-1.414-1.414L9.586 10l-.293-.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg> */}
          <img
          src='/profile.svg'
          className='h-5 w-5'/>
        </div>
        <div className='w-full h-[1px] rounded-md max-w-10 bg-blue-700'></div>
        <div className="flex items-center justify-center text-gray bg-bg_gray gap-12 border-2 border-gray rounded-full px-6 py-2 cursor-pointer">
          <span className="mr-2">{props.Tab2}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="gray">
            <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 7a1 1 0 012 0v2h2a1 1 0 110 2H11v2a1 1 0 11-2 0V11H7a1 1 0 010-2h2V7z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
  )
}

export default InstructorTab  