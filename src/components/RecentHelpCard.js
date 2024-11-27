import React from 'react'
import LayoutWidth from './LayoutWidth'
import Image from 'next/image'

const RecentHelpCard = ({heading, days, text}) => {
  return (
        <div className=" w-[100%] bg-[#fff] px-5 py-10 rounded-xl">
        <div className='flex justify-between mb-5 font-semibold'>
            <h1 className='text-xl'>{heading}</h1>
            <h3>{days} Days Ago</h3>
        </div>
        <p>{text}</p>
        <div className="flex justify-end mt-2">
          <Image 
            src="/dislike.svg"
            width={35}
            height={35}
            className='cursor-pointer'
          />
          <Image 
            src="/like.svg"
            width={35}
            height={35}
            className='cursor-pointer'
          />
         </div>
        </div>
        
  )
}

export default RecentHelpCard