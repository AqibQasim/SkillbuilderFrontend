import React from "react";
import Image from "next/image";
import LayoutWidth from "./LayoutWidth";

const AboutGoals = () => {
  return (
    <LayoutWidth>
      <div className="">
        <h1 className="text-3xl font-semibold">Our Goals</h1>
        <br />
        <div className="flex flex-col md:flex-row">
          {/* Section 1 */}
          <div className="flex items-center justify-center p-4 md:w-1/3">
            <div>
              <Image
                src="/goal1.png"
                alt="Goal 1 image"
                width={328}
                height={204}
              />
              <h5 className="mt-2 text-center font-semibold">
                Expanding Course Offerings
              </h5>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex items-center justify-center p-4 md:w-1/3">
            <div>
              <Image
                src="/goal2.png"
                alt="Goal 2 image"
                width={328}
                height={204}
              />
              <h5 className="mt-2 text-center font-semibold">
                Enhancing User Engagement
              </h5>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex items-center justify-center p-4 md:w-1/3">
            <div>
              <Image
                src="/goal3.png"
                alt="Goal 3 image"
                width={328}
                height={204}
              />
              <h5 className="mt-2 text-center font-semibold">
                Global Reach and Accessibility
              </h5>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          {/* Section 1 */}
          <div className="flex items-center justify-center p-4 md:w-1/2">
            <div>
              <Image
                src="/goal4.png"
                alt="Goal 4 image"
                width={328}
                height={204}
              />
              <h5 className="mt-2 text-center font-semibold">
                Technological Innovation
              </h5>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex items-center justify-center p-4 md:w-1/2">
            <div>
              <Image
                src="/goal5.png"
                alt="Goal 5 image"
                width={213}
                height={204}
              />
              <h5 className="mt-2 text-center font-semibold">
                Community Impact Initiatives
              </h5>
            </div>
          </div>
        </div>
      </div>
    </LayoutWidth>
  );
};
export default AboutGoals;
