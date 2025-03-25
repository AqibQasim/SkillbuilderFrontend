import Image from "next/image";

const CareerGuidance = () => {
  return (
    <div className="bg-gray-50 border rounded-2xl mx-auto shadow-lg p-8 max-w-[95%] w-full flex flex-col md:flex-row items-center">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-3xl font-bold">
          Plan Your Career with <br /> <span className="text-black">Expert Guidance</span>
        </h1>
        <p className="text-gray-600">
          Choosing the right career is a pivotal decision for every undergraduate.
          Career counseling provides clarity, direction, and expert insights, helping
          students align their strengths with the right opportunities. It bridges
          the gap between education and the professional world, ensuring informed
          and confident career choices.
        </p>

        <div className="space-y-2">
          <div className="flex items-start space-x-2">
            <span className="text-blue-600">&#9679;</span>
            <div>
              <h3 className="font-semibold">Find Your Perfect Career Fit</h3>
              <p className="text-gray-500 text-sm">
                Discover career paths that align with your skills, interests, and
                long-term goals through expert guidance.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <span className="text-blue-600">&#9679;</span>
            <div>
              <h3 className="font-semibold">Personalized Guidance for a Confident Future</h3>
              <p className="text-gray-500 text-sm">
                Get tailored advice and actionable steps to navigate your career journey
                with clarity and confidence.
              </p>
            </div>
          </div>
        </div>

        <Image
          src={"/bookNow.png"}
          alt="Book Now Button"
          width={200}
          height={200}
          className="hover:scale-105 hover:cursor-pointer"
        />
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 mt-6 md:mt-0 relative flex justify-center">
        <div className="bg-white w-80 h-96 rounded-xl shadow-md">
          <Image
            src={"/SmilingYoungWoman.png"}
            alt="Profile Image"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>

        <div className="absolute top-4 max-xsm:hidden block -right-16 md:-right-8 lg:right-6 bg-white rounded-lg shadow-md w-56 text-sm">
          <Image
            src={"/national.png"}
            alt="National Achievement"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>

        <div className="absolute bottom-12 max-xsm:hidden block max-sm:-left-12 sm:-left-16 md:-left-10 lg:left-8 rounded-lg shadow-md w-48 h-32 text-sm">
          <Image
            src={"/state.png"}
            alt="State Achievement"
            width={300}
            height={300}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CareerGuidance;