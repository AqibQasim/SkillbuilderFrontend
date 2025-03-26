import Image from "next/image";

const CareerGuidance = ({ studentProfile }) => {
  return (
    <div className="bg-gray-50 border rounded-2xl mx-auto shadow-lg p-8 max-w-[90%] w-full flex flex-col md:flex-row items-center">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-3xl font-satoshi font-bold">
          Plan Your Career with <br /> <span className="text-black font-satoshi">Expert Guidance</span>
        </h1>
        <p className="text-gray-600 font-satoshi ">
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
              <h3 className="font-semibold font-satoshi">Find Your Perfect Career Fit</h3>
              <p className="text-gray-500 font-satoshi text-sm">
                Discover career paths that align with your skills, interests, and
                long-term goals through expert guidance.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <span className="text-blue-600">&#9679;</span>
            <div>
              <h3 className="font-semibold font-satoshi">Personalized Guidance for a Confident Future</h3>
              <p className="text-gray-500 text-sm font-satoshi">
                Get tailored advice and actionable steps to navigate your career journey
                with clarity and confidence.
              </p>
            </div>
          </div>
        </div>

        <form
          className="w-full flex justify-start"
          action={"/api/checkout_session_counseling"}
          method="POST"
        >
          <input type="hidden" name="studentId" value={studentProfile?.id} />
          <input type="hidden" name="candidateEmail" value={studentProfile?.email} />
          <input
            type="hidden"
            name="items"
            value={JSON.stringify([
              {
                id: 21,
                instructor_id: 4,
                title: "Career Counselling By Zubair Alam",
                description: "You will get career counselling by Syed Muhammad Zubair Alam.",
                amount: "25",
                discount: "0",
                charges: "0.6",
                active: false,
                status: "approved",
              },
            ])}
          />
          <button type="submit" className="hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
            <Image src="/bookNow.png" alt="Book Now Button" width={200} height={200} />
          </button>
        </form>
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