import Image from "next/image";
import LayoutXPadding from "./LayoutXPadding";

const images = [
  //   "/frame2.png",
  "/frame1.png",
  "/frame2.png",
  "/frame3.png",
  "/frame4.png",
  "/frame5.png",
  "/frame6.png",
  "/frame7.png",
  "/frame8.png",
  "/frame9.png",
];

function CoursePlatforms() {
  return (
    <LayoutXPadding>
      <div className="course-platforms mx-3 mt-12 xl:mx-5">
        <div className="overflow-x-hidden text-center">
          <p className="mb-7 text-xl font-semibold text-[#00204D]">
            You can also access our course from various platforms
          </p>

          <div className="platform-icons relative bg-white">
            <div className="left-shadow pointer-events-none absolute bottom-0 left-0 z-[2] h-full w-24 bg-gradient-to-r from-white from-15%"></div>
            <div className="right-shadow pointer-events-none absolute bottom-0 right-0 z-[2] h-full w-24 bg-gradient-to-l from-white from-15%"></div>
            <div className="icons relative z-[1] flex items-center overflow-hidden whitespace-nowrap">
              <div className={`logos flex gap-8 md:gap-10 xl:gap-16`}>
                {images.map((image, index) => (
                  <Image
                    key={image + index}
                    src={image}
                    alt="Platform Logo"
                    width={114}
                    height={28}
                  />
                ))}
                {/* Duplicate the logos for seamless animation */}
                {images.map((image, index) => (
                  <Image
                    key={image + "-duplicate-" + index}
                    src={image}
                    alt="Platform Logo"
                    width={114}
                    height={28}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="my-12"></div>
        </div>
      </div>
    </LayoutXPadding>
  );
}

export default CoursePlatforms;
