import Image from "next/image";


const CareerHero = () => { 

  return ( 
   <div  className="overflow-hidden z-0 min-h-[440px] sm:min-h-[440px] md:min-h-[450px] lg:min-h-[520px] xl:min-h-[500px] " >
  <Image
    src={"/CareerBackRound.png"}
    alt="career-counsling Hero"
    width={1920}
    height={1080}
    className="h-full w-full object-cover hidden sm:block "
  />
  <div className="flex  flex-col items-center justify-center absolute inset-0 z-20 text-center sm:px-4">
    <div className="text-center relative top-16 max-xsm:w-[100%] max-sm:w-[85%] w-[80%] sm:w-[80%] md:w-[70%] lg:w-[64%] xl:w-[60%]">
      <h1 className="max-xsm:text-lg max-sm:text-2xl text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-center font-medium text-black">
        Unlock Your True Potential with
        <span className="text-blue-shade-1 font-semibold"> AI-Powered </span>
        Career Counseling!
      </h1>
      <div className="max-sm:[70%] flex justify-center px-10 text-center">
      <p className="text-gray-600 mt-4 text-center max-sm:text-xs  sm:text-base">
        Personalized career guidance with the power of AI & expert mentorship.
      </p>
      </div>
      <div className="flex justify-center mt-12 relative">
        <Image
          src={"/button.png"}
          alt="Button"
          width={90}
          height={90}
          className="hover:scale-105 "
        />
      </div>
  </div>
  </div>
</div>

);
};

export default CareerHero;