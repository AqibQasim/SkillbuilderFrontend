import React from 'react'
import RecentHelpCard from './RecentHelpCard'
import LayoutWidth from './LayoutWidth'

const RecentHelpCards = () => {
  return (
    <LayoutWidth>
       <div className='flex flex-col gap-5 mb-10'>
        <RecentHelpCard heading="Cannot access the system" days={3} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum " />
        <RecentHelpCard heading="Refund not initiated" days={3} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum "/>
    </div>
    </LayoutWidth>
  )
}

export default RecentHelpCards