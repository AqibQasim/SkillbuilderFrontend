import Image from "next/image";

const BootcampTutor = ({ tutor }) => {
  const name =
    tutor?.user?.first_name + " " + tutor?.user?.last_name || "Zubair Alam";
  return (
    <div className="mx-auto w-full max-w-[80%] p-4">
      <h2 className="mb-4 text-2xl font-bold">Meet our Expert Educators</h2>
      <div className="flex max-w-[40rem] flex-col items-center rounded-lg bg-gray-200 p-6 shadow-md md:flex-row md:items-start">
        <div className="mb-4 w-full md:w-52  h-[18rem]  flex-shrink-0 rounded-lg bg-white md:mb-0   ">
          {/* <Image /> */}
        </div>
        <div className="md:ml-6">
          {/* Image and Name/Mentor Info Side by Side */}
          <div className="mb-4 flex items-center space-x-4">
            <Image src="/teacher.png" alt="mentor" width={24} height={24} />
            <div>
              <h2 className="text-xl font-semibold text-gray-500">{name}</h2>
              <p className="text-sm text-gray-500">Mentor</p>
            </div>
          </div>

          {/* Description */}
          <p className="mb-4 font-medium text-gray-600">
            {name} is a seasoned professional with extensive experience in
            advertising, branding, and creative solutions. As a key member of
            the Four Diagonal Advertising team, he brings a wealth of knowledge
            and a passion for innovation to every project.
          </p>

          {/* Additional Info */}
          <ul className="space-y-1 text-sm font-semibold text-gray-700">
            <li>10+ Years of average mentor experience.</li>
            <li>Access to live Q&A, workshops, and 1-on-1 sessions.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BootcampTutor;
