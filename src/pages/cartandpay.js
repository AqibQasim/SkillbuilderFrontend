import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ShopCheckout from '@/components/ShopCheckout'
import ShoppingCart from '@/components/ShoppingCart'
import React from 'react'

const cartandpay = () => {
  return (
    <>
    <Navbar/>
    <div className='w-full h-fit bg-bg_gray'>
        <div>
            BreadCrumb 
        </div>
        {/* <div>
            <ShoppingCart/>
        </div> */}
        <ShopCheckout/>
    </div>
    <Footer/>
    </>
  )
}

export default cartandpay