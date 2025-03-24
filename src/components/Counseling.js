import Image from "next/image";

const Counseling = () => {
  return (
    <div className="min-w-[95%] h-auto flex justify-center items-center mx-auto text-center">
      <div className="w-[85%] md:w-[85%] lg:min-w-[90%] h-auto border rounded-xl flex flex-col-reverse md:flex-row items-center lg:items-start p-6 lg:p-5 bg-gray-50">
        {/* Left Section */}
        <div className="w-full relative md:w-1/5 lg:w-1/2 lg:flex justify-center mt-8 md:mt-0">
          <div className="absolute hidden lg:block top-20 left-8 w-150 h-150 bg-gray-50">
            <Image src="/AI-card.png" alt="AI Card" width={400} height={400} className="w-full h-full" />
          </div>
          <div className="hidden lg:block absolute left-0 top-44 w-150 h-150">
            <Image src="/invest-card.png" alt="Invest Card" width={920} height={980} className="w-full h-full" />
          </div>
          <div className="absolute hidden lg:block lg:top-7 lg:right-[-65px] h-150 w-150">
            <Image src="/man.png" alt="Profile Image" width={500} height={500} className="w-full h-full" />
          </div>
          <div className="absolute hidden md:bottom-[-220px] md:block lg:top-7 lg:right-[-65px] lg:hidden lg:h-150 lg:w-150 h-96 w-96">
            <Image src="/man.png" alt="Profile Image" width={500} height={500} className="w-full h-full" />
          </div>
          <div className="absolute md:top-24 hidden md:block lg:top-80 lg:right-[80px] h-150 w-100">
            <Image src="/text.png" alt="Profile Image" width={500} height={500} className="w-full h-full" />
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-4/5 lg:w-1/2 space-y-4 text-center md:text-left">
          <div className="flex">
            <h1 className="text-3xl  lg:text-4xl font-semibold text-gray-900">1 to 1 Education Consultancy</h1>
            <div className="relative lg:right-24">
              <Image src="/25$.png" alt="Price" width={100} height={100} className="hover:scale-105" />
            </div>
          </div>
          <p className="text-gray-700 text-sm">
            Get expert career guidance personalized to your goals for just <span className="font-bold">$25 per session</span>. Book now to gain clarity and confidence in your career path!
          </p>
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <span className="text-blue-600">➝</span>
              <div>
                <h2 className="font-semibold text-gray-900">Personalized Career Roadmap</h2>
                <p className="text-gray-600 text-sm">Get expert guidance tailored to your skills, interests, and goals to help you choose the right career path.</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-blue-600">➝</span>
              <div>
                <h2 className="font-semibold text-gray-900">Affordable & Actionable Insights</h2>
                <p className="text-gray-600 text-sm">For just $25 per session, receive practical advice and strategies to accelerate your career growth.</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-blue-600">➝</span>
              <div>
                <h2 className="font-semibold text-gray-900">Gain Clarity & Confidence</h2>
                <p className="text-gray-600 text-sm">Make informed career decisions with expert-backed insights, ensuring a successful and fulfilling future.</p>
              </div>
            </div>
          </div>
          <div className="mt-4 relative left-2">
            <Image src="/carrer-button.png" alt="Button" width={200} height={200} className="hover:scale-105" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counseling;
