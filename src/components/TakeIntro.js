import InstructorTab from '@/components/InstructorTab'
import InstructorTop from '@/components/InstructorTop'
import VideoUpload from '@/components/VideoUpload'
import React from 'react'

const TakeIntro = () => {
  return (
    <>
        <div className='w-full flex flex-col h-[60vh] p-6'>
            {/* <div className='w-[20%] h-[3em] justify-center items-center'>
                <InstructorTop/>
            </div> */}
            {/* <InstructorTab
            Tab1="Basic Info"
            Tab2="Videos"/> */}
            <div className='w-full h-fit py-6 flex flex-col justify-center'>
                {/* <div className='w-full h-full items-center'> */}
                    {/* <InstructorTab/> */}
                {/* </div> */}
                <div className='w-full h-fit'>
                    {/* <div className='w-full flex flex-col gap-2'>
                        <h3 className='font-semibold'>Upload an introduction video of yours</h3>
                        <div className='rounded-md border-2 border-blue flex flex-col items-center gap-2 justify-center w-full h-fit py-20'>
                            <img src="/cloud.png" className='aspect-auto'/>
                            <p><button className='text-blue'>Browse</button> your File</p>

                        </div>
                    </div> */}
                    <p className='font-semibold py-2'>Upload An Introduction Video Of Yours</p>
                    <VideoUpload/>
                </div>
            </div>
            <div className='w-full gap-4 flex flex-wrap self-end justify-center p-4 items-center md:items-end lg:items-end h-[0em] 
                        sm:justify-center sm:flex-nowrap
                        md:justify-end md:flex-nowrap
                        lg:justify-end lg:flex-nowrap'>
                {/* <div className='bg-[#E3E3EC] rounded-lg w-full flex justify-center h-fit
                            md:w-fit lg:w-fit'>
                    <button className=''>
                        <p className='px-8 py-3 self-center text-[#0000FF'>
                            Go To Dashboard
                        </p>
                    </button>
                </div>
                <div className='bg-blue rounded-lg w-full flex justify-center h-fit
                                md:w-fit lg:w-fit'>
                    <button className=''>
                        <p className='px-8 py-3 self-center text-white'>
                            Go To Dashboard
                        </p>
                    </button>
                </div>     */}
            </div>
        </div>
        {/* <VideoUpload/> */}
    </>
    
  )
}

export default TakeIntro