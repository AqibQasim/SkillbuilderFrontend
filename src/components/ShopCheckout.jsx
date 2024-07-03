import React from 'react'
import ShoppingCart from './ShoppingCart'
import Bill from './Bill'

const ShopCheckout = () => {
    const courses = [
        {
            id:1,
            imgSrc:'/courseImg.png',
            title:"UI/UX Designing",
            instructors:"By Shaheer Inayat Ali & Zubair alam",
            duration : "35 Hours  47 Lectures",
            rating :4.9,
            price:24.999
    },
        {
            id:2,
            imgSrc:'/courseImg.png',
            title:"UI/UX Designing",
            instructors:"By Shaheer Inayat Ali & Zubair alam",
            duration : "35 Hours  47 Lectures",
            rating :4.9,
            price:24.999
    }
];
  return (
    <div className='w-full h-fit flex flex-wrap gap-2 p-4
                    md:flex-nowrap 
                    lg:flex-nowrap'>
        <ShoppingCart
        courses={courses}
        />
        <Bill
        courses={courses}
        />

    </div>
  )
}

export default ShopCheckout