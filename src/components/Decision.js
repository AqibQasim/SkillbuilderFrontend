import Image from "next/image";

const Decision = () => {
  return (
    <div className="w-[75%] mx-auto">
      {/* Background Image */}
      <div className="z-0 opacity-30">
        <Image
          src={"/background.png"}
          alt="career-counseling Hero"
          width={1020}
          height={1080}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative bottom-12 mx-auto h-12 md:h-24 lg:h-12 z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="md:w-[60%] max-sm:w-[90%] sm:w-[80%] text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl relative 2xl:bottom-6 font-satoshi font-semibold">
          Why Choose 1-on-1 Career Counseling with Us?
        </h1>
        <p className="mt-5 mb-5 sm:block w-[90%] sm:w-[80%] md:w-[70%] hidden text-xs text-gray-500 relative lg:bottom-0 2xl:bottom-6 font-satoshi">
          Making the right career decision is important, and we’re here to guide you every step of the way. Our personalized counseling sessions help you gain clarity, make informed choices, and build a strong foundation for your future.
        </p>
        <p className="mt-5 mb-5  w-[90%]  block sm:hidden text-xs text-gray-500 relative lg:bottom-0 2xl:bottom-6 font-satoshi ">
          Making the right career decision is important, and we’re here to guide you every step of the way. 
        </p>
      </div>

      {/* Counseling Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-6 lg:mt-12 xl:mt-5 ">
        {features.map((feature, index) => (
          <div key={index} className="relative bg-white py-6 rounded-xl shadow-md flex flex-col space-y-3 border border-orange-shade-1">
            <div className="bg-gray-200 w-16 h-12 rounded-lg">
              <Image
                src={feature.icon}
                alt="Feature Icon"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>
            <h3 className="font-bold text-lg px-6">{feature.title}</h3>
            <p className="text-gray-600 px-6">{feature.description}</p>
            <div className="h-20 w-full"></div>
            <div className="absolute bottom-0 right-0 mt-5 w-40 h-28 rounded-br-lg p-1">
              <Image
                src={"/calender.png"}
                alt="Calendar Icon"
                width={100}
                height={100}
                className="w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const features = [
  {
    icon: "/icon1.png",
    title: "Guidance That Puts You First",
    description: "Your career path should reflect your strengths, ambitions, and interests. We take the time to understand your goals and provide insights that help you move forward with confidence."
  },
  {
    icon: "/icon2.png",
    title: "Structured and Practical Career Planning",
    description: "We help you navigate key decisions, whether it's choosing the right course, university, or career path by providing a clear roadmap as per your aspirations."
  },
  {
    icon: "/icon3.png",
    title: "Expert Advice from Industry Professionals",
    description: "Our team brings years of experience in education and industry, offering valuable insights that go beyond standard career advice."
  },
  {
    icon: "/icon4.png",
    title: "Continuous Support for Long-Term Success",
    description: "Our commitment doesn’t end with a consultation. We ensure you have the right resources to succeed in your academic and professional journey."
  }
];

export default Decision;
