import Image from "next/image";
import Slider from "./Slider";

const HeroSection = () => {
  return (
    <>
      <div className="my-10 flex h-auto w-[100%] items-center justify-center max-sm:my-0 max-sm:mt-10 max-sm:h-auto">
        <div className="flex w-[100%] items-center justify-center bg-white max-sm:pt-10">
          <Slider />
        </div>
      </div>
    </>
  );
};
export default HeroSection;
