import React from 'react'
import Image from 'next/image'

const HelpCard = ({imageSrc, heading, description}) => {
  return (
    <div className='bg-[#fff] px-5 py-5 rounded-2xl flex flex-col gap-2 '>
        <Image 
        src={`/${imageSrc}`}
        height={25}
        width={25}
        />
        <h2 className="text-xl font-medium">{heading}</h2>
        <p>{description}</p>
    </div>
  )
}

export default HelpCard