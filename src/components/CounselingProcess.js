import Image from "next/image";

const CounselingProcess = () => {
  return (
    <div className="mx-auto w-[95%] relative 2xl:-top-5">
      {/* Section Header */}
      <div className="mb-10 text-center">
        <h2 className="mt-4 2xl:mt-0 text-3xl font-bold text-gray-900 font-satoshi md:text-4xl">
          Career Counseling Process
        </h2>
        <p className="text-xs font-satoshi text-center mx-auto mt-5 w-[70%] text-gray-600">
          We assess your skills and interests using AI-driven insights, refined
          by expert mentors. In a one-on-one session, you’ll receive
          personalized guidance and a clear action plan to confidently navigate
          your career path.
        </p>
      </div>

      {/* Process Steps */}
      <div className="relative mx-auto flex justify-between items-center mb-5 w-[95%]">
        <div className="absolute top-1/2 left-0 w-full border-t-2 border-dotted border-gray-300 transform -translate-y-1/2"></div>
        {[...Array(4)].map((_, index) => (
          <div key={index} className="relative bg-white w-15 h-15 flex items-center justify-center">
            <Image src={"/circle.png"} alt="Step Indicator" width={100} height={100} className="w-full h-full" />
          </div>
        ))}
        <div className="relative w-3 h-3 rounded-full shadow-md flex items-center justify-center border border-gray-300 bg-gray-300"></div>
      </div>

      {/* Steps Grid */}
      <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto ">
        {[
          {
            image: "/1stCARD.svg",
            title: "Payment",
            description: "Start by securing your session with a simple payment process."
          },
          {
            image: "/2ndCARD.svg",
            title: "Career Profiling through AI",
            description:
              "Take an AI-driven interview to help our experts understand your skills, strengths, and aspirations better."
          },
          {
            image: "/3rdCARD.svg",
            title: "Schedule Your 1-on-1 Session",
            description: "Pick a convenient time for a personal counseling session with our expert."
          },
          {
            image: "/4thCARD.svg",
            title: "Career Counseling",
            description:
              "Engage in a deep, insightful session where our experts guide you toward the best career choices based on your profile and goals."
          }
        ].map((step, index) => (
          <div key={index} className="rounded-2xl overflow-hidden border max-w-[300px] 2xl:min-w-[380px]  p-2">
            <div className="w-full  h-[282px] xl:h-[270px] 2xl:h-[364px] rounded-xl mb-4 relative">
              <Image 
                src={step.image} 
                alt={step.title} 
                layout="fill" 
                objectFit="cover" 
                className="rounded-xl"
              />
            </div>
            <h3 className="text-xl font-satoshi font-bold">{step.title}</h3>
            <p className="text-gray-400 font-satoshi">{step.description}</p>
          </div>

        ))}
      </div>
    </div>
    </div>
  );
};

export default CounselingProcess;
