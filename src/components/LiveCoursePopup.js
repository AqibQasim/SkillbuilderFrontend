import React from 'react'
import Image from 'next/image'
import Button from './Button'
import { useRouter } from 'next/router'
import ButtonWithIcon from './ButtonWithIcon'


const LiveCoursePopup = ( {title,price, timeOptions,videoConf}  ) => {
    const router = useRouter();

  return (
      
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="relative w-[500px] rounded-3xl bg-gradient-to-b from-blue-100 to-gray-100 p-8 shadow-lg">
            <div className="flex flex-col items-start justify-center">
              <Image
                src="/Tick.svg"
                alt="Success"
                width={64}
                height={64}
                className="mb-4"
              />
              <h2 className="mb-1 text-center text-2xl font-semibold text-gray-900">
                Congratulations
              </h2>
              <p className="mb-4 text-start text-gray-600">
                Your course is successfully created!
              </p>

              <p className="mb-6 text-start text-gray-600">
              Your new course, <strong>{title}</strong> has been successfully added to Skill Builder.
              </p>
            </div>

            <div className="mb-32 grid grid-cols-2 gap-2 border border-blue-200 rounded-lg p-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-500">
                  Title name
                </label>
                <p className="text-wrap: rounded-lg border-2 border-solid border-blue-200 p-2 font-normal text-gray-900">
                  {title?.length > 14
                    ? title.substring(0, 18) + "..."
                    : title}
                </p>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-500">
                  Price
                </label>
                <p className="text-wrap: rounded-lg border-2 border-solid border-blue-200 p-2 font-normal text-gray-900">
                  {price?.length > 14
                    ? price?.substring(0, 18) + "..."
                    : price ?? '100'}
                </p>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-500">
                  Duration
                </label>
                <p className="text-wrap: rounded-lg border-2 border-solid border-blue-200 p-2 font-normal text-gray-900">
                  {timeOptions?.length > 14
                    ? timeOptions?.substring(0, 18) + "..."
                    : timeOptions + ' hours' ?? '1 hour'}
                </p>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-500">
                  Video conferencing
                </label>
                <p className="text-wrap: rounded-lg border-2 border-solid border-blue-200 p-2 font-normal text-gray-900">
                  {videoConf?.length > 14
                    ? videoConf?.substring(0, 18) + "..."
                    : videoConf ?? 'Zoom'}
                </p>
              </div>
            </div>

            {/* <div className="mb-8 space-y-4">
              <div className="flex items-start gap-3 rounded-lg bg-purple-200 p-2 text-sm">
                <Image
                  src="/Shield.svg"
                  alt="Recorded Sessions"
                  width={40}
                  height={40}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Recorded Sessions
                  </h4>
                  <p className="text-xs text-gray-600">
                    You’ll receive access to exclusive materials, live Q&A,
                    and recorded sessions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-lg bg-purple-200 p-2 text-sm">
                <Image
                  src="/Notification.svg"
                  alt="Recorded Sessions"
                  width={40}
                  height={40}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Confirmation
                  </h4>
                  <p className="text-xs text-gray-600">
                    Our account manager will add you to the exclusive WhatsApp
                    group within 24 hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg bg-purple-200 p-2 text-sm">
                <Image
                  src="/Info.svg"
                  alt="Recorded Sessions"
                  width={40}
                  height={40}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Check Email</h4>
                  <p className="text-xs text-gray-600">
                    Check your email for additional details and access links.
                  </p>
                </div>
              </div>
            </div> */}

            <div className="flex justify-between w-[100%]">
              <button
                onClick={() => router.push("/dashboard")}
                className="rounded-full w-[35%] mr-4 bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300"
              >
                Back to home
              </button>

               <ButtonWithIcon 
               onClick={() => alert("View All Sessions clicked clicked")}
               text="View All Sessions" className="text-nowrap w-[65%]" />
              {/* <Button 
              className='w-[62%]'
              onClick={() => alert("")}>
                View All Sessions
              </Button> */}
            </div>
          </div>
        </div>
  );
}
    
export default LiveCoursePopup 