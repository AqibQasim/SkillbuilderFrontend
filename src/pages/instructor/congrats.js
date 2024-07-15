//in src/pages/
import Image from 'next/image'
import React from 'react'


const congrats = () => {
  return (
    <div className='w-full flex flex-col h-[100vh] p-4 bg-white'>
        <div className='w-[20%] h-[5em]'>
            <div className='aspect-auto'>
            {/* <div></div> */}
                <Image
                src="/skillbuilder_logo.png"
                height={80}
                width={150}
                alt="logo"/>
            </div>
        </div>
        <div className='flex self-center justify-center h-fit'>
            <div className='aspect-auto'>
                <Image 
                height={500}
                width={500}
                alt="Congratz"
                src="/congratz.png"/>
            </div>
        </div>
        <div className='w-full flex self-end justify-center items-center md:items-end lg:items-end h-[9em] 
                        md:justify-end 
                        lg:justify-end'>
            <div className='bg-blue rounded-lg w-full flex justify-center h-fit
                            md:w-fit lg:w-fit'>
                <button className=''>
                    <p className='px-8 py-3 self-center text-white'>
                        Go To Dashboard
                    </p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default congrats