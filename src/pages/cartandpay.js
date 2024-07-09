import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ShopCheckout from '@/components/ShopCheckout'
import ShoppingCart from '@/components/ShoppingCart'
import React from 'react'
import { useRouter } from 'next/router'
import { useSelector } from "react-redux";

const cartandpay = () => {

  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const courses = useSelector((state) => state.cart.items);
  console.log("length in root file:", courses?.length)

  useEffect(() => {
    setIsClient(true);
  }, [router?.isReady,courses]);

  if (!isClient) {
    return null;
  }

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