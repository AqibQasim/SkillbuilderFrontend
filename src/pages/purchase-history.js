import React from 'react'
import LayoutWidth from '@/components/LayoutWidth'
import CurrentPath from '@/components/CurrentPath'
import Footer from '@/components/Footer'
import { useSelector } from 'react-redux';
import PaymentHistoryTable from '@/components/PaymentHistoryTable'
import HomePageNavbar from '@/components/HomePageNavbar'

const purchaseHistory = () => {
const courses = useSelector((state) => state.cart.items);
  return (
    <>
      <div className="flex h-[100%] w-[100%] flex-col bg-bg_gray">
      <LayoutWidth>
      <HomePageNavbar/>
      </LayoutWidth>
        <LayoutWidth>
          <div className="path-wrapper mx-auto mb-8 mt-8 max-w-screen-2xl first-line:w-[90%]">
            <CurrentPath />
          </div>
        </LayoutWidth>
        <LayoutWidth>
          <div className="align-self-start text-4xl font-semibold max-sm:mt-4 max-sm:text-2xl">
            Purchase History
          </div>
        </LayoutWidth>

        <LayoutWidth>
          <div className="mb-5">
            <PaymentHistoryTable />
          </div>
        </LayoutWidth>
      </div>
      <Footer />
    </>
  );
}

export default purchaseHistory