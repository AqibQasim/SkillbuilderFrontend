import React from "react";
import Image from "next/image";

const AboutGoals = () =>{
    return(
        <div className="container">
            <h1 className='text-2xl font-semibold'>Our Top Skills At Your Disposal</h1>
            <div className="flex flex-col md:flex-row">
            {/* Section 1 */}
            <div className="md:w-1/3 p-4 flex items-center justify-center">
                <div>
                    <Image src="/goal1.png" width={200} height={200}/>
                    <h5 className="text-center mt-2">Expanding Course Offerings</h5>
                </div>
            </div>

            {/* Section 2 */}
            <div className="md:w-1/3 p-4 flex items-center justify-center">
                <div>
                    <Image src="/goal2.png" width={200} height={200}/>
                    <h5 className="text-center mt-2">Enhancing User Engagement</h5>
                </div>
            </div>

            {/* Section 3 */}
            <div className="md:w-1/3 p-4 flex items-center justify-center">
                <div>
                    <Image src="/goal3.png" width={200} height={200}/>
                    <h5 className="text-center mt-2">Global Reach and Accessibility</h5>
                </div>
            </div>
            </div>
            <div className="flex flex-col md:flex-row">
            {/* Section 1 */}
            <div className="md:w-1/2 p-4 flex items-center justify-center">
                <div>
                    <Image src="/goal4.png" width={200} height={200}/>
                    <h5 className="text-center mt-2">Technological Innovation</h5>
                </div>
            </div>

            {/* Section 2 */}
            <div className="md:w-1/2 p-4 flex items-center justify-center">
                <div>
                    <Image src="/goal5.png" width={200} height={200}/>
                    <h5 className="text-center mt-2">Community Impact Initiatives</h5>
                </div>
            </div>
            </div>
            </div>
    )
}
export default AboutGoals;