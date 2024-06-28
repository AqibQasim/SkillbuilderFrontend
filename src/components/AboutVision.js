import React from "react";
import Image from "next/image";

const AboutVision = () => {
  return (
    <div className="mt-16 w-[90%] max-w-screen-2xl">
      <div className="flex flex-col md:flex-row w-full">
        <br />
        {/* Section 1 */}
        <div className="md:w-1/2 p-4 flex items-center justify-center">
          <div>
            <div className="flex items-center space-x-4">
              <h2 className="text-3xl font-semibold">Our Vision</h2>
              <Image
                src="/vision.png"
                width={47}
                height={47}
                alt="Vision Icon"
              />
            </div>
            <p className="mt-4 w-[85%] text-gray-500">
              Skill Builder aspires to be more than an educational platform; it
              aims to be a catalyst for positive change, creating a dynamic
              global hub where learners, instructors, and industry experts
              collaborate, innovate, and collectively contribute to a brighter
              and more empowered future. We envision a future where learning is
              not confined by geographical constraints.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="md:w-1/2 p-4 flex items-center justify-center">
          <div>
            <div className="flex items-center space-x-4">
              <h2 className="text-3xl font-semibold">Our Mission</h2>
              <Image
                src="/mission.png"
                width={47}
                height={47}
                alt="Mission Icon"
              />
            </div>

            <p className="mt-4 w-[85%] text-gray-500">
              Our mission is to revolutionize online education by inspiring a
              passion for learning, empowering individuals to acquire essential
              skills, and cultivating a dynamic learning ecosystem. We are
              committed to making education accessible to all, breaking down
              barriers and ensuring affordability without compromising on
              quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutVision;
