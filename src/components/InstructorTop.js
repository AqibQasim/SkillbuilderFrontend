import React from 'react'
import Image from 'next/image'

const InstructorTop = () => {
  return (
    <div className='aspect-auto'>
        <Image
        src="/skillbuilder_logo.png"
        height={80}
        width={150}
        alt="logo"/>
    </div>
  )
}

export default InstructorTop