import React from 'react'
import HelpCard from './HelpCard'
import LayoutWidth from './LayoutWidth'

const HelpCards = () => {
  return (
    <>
    <LayoutWidth>
        <div className='grid grid-cols-1 mt-5 gap-5 md:grid-cols-3 sm:grid-cols-2'>
        <HelpCard imageSrc="account_icon.png" heading="Account & Notifications" description="Account settings, login issues, and notification preferences"/>
        <HelpCard imageSrc="keyicon.png" heading="Payment & Subscriptions" description="Help with payments, subscription options, and Financial Aid"/>
        <HelpCard imageSrc="educationicon.png" heading="Certificaties & Verification" description="How to get and share a Course Certificate"/>
        </div>
      </LayoutWidth>
    </>
  )
}

export default HelpCards