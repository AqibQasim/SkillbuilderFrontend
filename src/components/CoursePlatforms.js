import Image from "next/image";
import LayoutXPadding from "./LayoutXPadding";

const images = [
  //   "/frame2.png",
  "/IBM.png",
  "/habib-uni.png",
  "/fast-uni.png",
  "/IBM.png",
  "/habib-uni.png",
  "/fast-uni.png",
  "/IBM.png",
  "/habib-uni.png",
  "/fast-uni.png",
];

function CoursePlatforms() {
  return (
    <LayoutXPadding>
      <div className="course-platforms">
        <div className="overflow-x-hidden text-center">
          <p className="mb-7 text-xl font-semibold text-[#00204D]">
            You can also access our course from various platforms
          </p>

          <div className="platform-icons relative bg-white">
            <div className="left-shadow pointer-events-none absolute bottom-0 left-0 z-[2] h-full w-36 bg-gradient-to-r from-white from-15%"></div>
            <div className="right-shadow pointer-events-none absolute bottom-0 right-0 z-[2] h-full w-36 bg-gradient-to-l from-white from-15%"></div>
            <div className="icons relative z-[1] flex items-center overflow-hidden whitespace-nowrap">
              <div className={`logos2 flex h-8 gap-6 md:gap-8 xl:gap-10`}>
                {images.map((image, index) => (
                  <Image
                    key={image + index}
                    src={image}
                    alt="Platform Logo"
                    width={350}
                    height={200}
                  />
                ))}
                {/* Duplicate */}
                {images.map((image, index) => (
                  <Image
                    key={image + "-duplicate-" + index}
                    src={image}
                    alt="Platform Logo"
                    width={350}
                    height={200}
                  />
                ))}

                {/* duplicate-2 */}
                {images.map((image, index) => (
                  <Image
                    key={image + "-duplicate-2-" + index}
                    src={image}
                    alt="Platform Logo"
                    width={350}
                    height={200}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutXPadding>
  );
}

export default CoursePlatforms;
