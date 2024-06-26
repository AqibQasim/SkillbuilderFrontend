import React from "react";
import Image from "next/image";

const AboutGoals = () => {
  return (
    <div className="container">
      <h1 className="text-3xl font-semibold">Our Goals</h1>
      <br />
      <div className="flex flex-col md:flex-row">
        {/* Section 1 */}
        <div className="md:w-1/3 p-4 flex items-center justify-center">
          <div>
            <Image src="/goal1.png" width={348} height={224} />
            <h5 className="text-center mt-2 font-semibold">
              Expanding Course Offerings
            </h5>
          </div>
        </div>

        {/* Section 2 */}
        <div className="md:w-1/3 p-4 flex items-center justify-center">
          <div>
            <Image src="/goal2.png" width={348} height={224} />
            <h5 className="text-center mt-2 font-semibold">
              Enhancing User Engagement
            </h5>
          </div>
        </div>

        {/* Section 3 */}
        <div className="md:w-1/3 p-4 flex items-center justify-center">
          <div>
            <Image src="/goal3.png" width={348} height={224} />
            <h5 className="text-center mt-2 font-semibold">
              Global Reach and Accessibility
            </h5>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        {/* Section 1 */}
        <div className="md:w-1/2 p-4 flex items-center justify-center">
          <div>
            <Image src="/goal4.png" width={348} height={224} />
            <h5 className="text-center mt-2 font-semibold">
              Technological Innovation
            </h5>
          </div>
        </div>

        {/* Section 2 */}
        <div className="md:w-1/2 p-4 flex items-center justify-center">
          <div>
            <Image src="/goal5.png" width={233} height={224} />
            <h5 className="text-center mt-2 font-semibold">
              Community Impact Initiatives
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutGoals;
