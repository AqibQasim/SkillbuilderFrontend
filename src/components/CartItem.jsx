import Image from 'next/image'
import React from 'react'

const CartItem = ({
        imgSrc,
        title,
        instructors,
        duration,
        rating ,
        price,
}) => {
  return (
    <div className='w-full h-fit gap-6 flex px-6 my-4 flex-wrap justify-center
                    sm:justify-between sm:flex-nowrap 
                    md:justify-between md:flex-nowrap
                    lg:justify-between lg:flex-nowrap'>
        <div className='w-full flex gap-5 flex-wrap justify-center 
                        sm:justify-normal sm:flex-nowrap
                        md:justify-normal md:flex-nowrap 
                        lg:justify-normal lg:flex-nowrap'>
            <div className='w-full md:w-fit lg:w-fit min-w-8 h-fit flex justify-center object-cover'>
                <img src={imgSrc}
                 className='aspect-auto'/>
                {/* <Image
                src="/courseImg.png"
                alt="course Image"
                height={100}
                width={120}
                // layout='fill'
                /> */}
            </div>
            <div className='flex flex-col justify-center gap-2'>
                <div className='flex justify-center 
                                sm:justify-normal 
                                md:justify-normal'>
                    <b>{title}</b>
                </div>
                <div className='text-sm'>
                    <p>{instructors}</p>
                </div>
                <div className='w-full flex gap-4 flex-wrap md:flex-nowrap lg:flex-nowrap'>
                    <div className='text-xs'>
                        <p>{duration}</p>
                    </div>
                    <div className='w-fit gap-1 md:gap-2 lg:gap-2 flex items-center'>
                        <p className='text-xs'>
                            {rating}
                        </p>
                        <div className='w-fit h-fit'>
                            <Image
                            src="/star.png"
                            alt="star"
                            height={15}
                            width={15}/>
                        </div>
                        <div className='w-fit h-fit'>
                            <Image
                            src="/star.png"
                            alt="star"
                            height={15}
                            width={15}/>
                        </div>
                        <div className='w-fit h-fit'>
                            <Image
                            src="/star.png"
                            alt="star"
                            height={15}
                            width={15}/>
                        </div>
                        <div className='w-fit h-fit'>
                            <Image
                            src="/star.png"
                            alt="star"
                            height={15}
                            width={15}/>
                        </div>
                        <div className='w-fit h-fit'>
                            <Image
                            src="/star.png"
                            alt="star"
                            height={15}
                            width={15}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-[80%] h-[100%] gap-0 flex justify-evenly self-center 
        sm:justify-between sm:flex-col sm:w-fit sm:gap-6 
        md:justify-between md:flex-col md:w-fit md:gap-8 
        lg:justify-normal lg:flex-col lg:w-fit lg:gap-10'>
            <p className='text-[#FF3939]'>Remove</p>
            <p className='text-[#0000FF]'>{price}$</p>
        </div>
    </div>
  )
}

export default CartItem