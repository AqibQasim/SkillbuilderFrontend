import ButtonWithIcon from "./ButtonWithIcon";

export default function BootcampSection() {
  return (
    <section className="bg-gray-50 px-6 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2">
        {/* Left Content */}
        <div>
          <div className="mb-4 flex w-[8rem] items-center gap-2 rounded-3xl bg-gray-200 px-2 py-1">
            <span className="text-md font-semibold">4.8</span>
            <div className="flex text-yellow-400">
              {/* Star Rating */}
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                >
                  <path d="M12 2.25l2.788 8.568h9.012L16.9 15.307l3.374 9.443-7.274-5.239-7.274 5.239 3.374-9.443L.2 10.818h9.012L12 2.25z" />
                </svg>
              ))}
            </div>
          </div>
          <h1 className="mb-6 text-4xl font-bold text-gray-900">
            Computer Science Bootcamp
          </h1>
          <p className="mb-4 font-medium leading-relaxed text-gray-600">
            In-depth intensive study of Computer Science foundational topics,
            for building your knowledge of key computing principles. An
            excellent introduction to the fundamentals of computer science for
            those looking to pursue further study in a specialized field like
            computer degree courses in the future.
          </p>
          <p className="mb-6 text-lg font-semibold text-gray-700">
            60% Live Instructor-led online training, 40% On-demand flexible
            learning <span className="font-normal">(Best of both worlds!)</span>
          </p>
          {/* Features */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <div className="flex items-center gap-3 rounded-full bg-white p-4 shadow-md">
              <span className="rounded-full bg-blue-100 p-2 text-blue-500">
                🔑
              </span>
              <p className="rounded-3xl font-medium text-gray-800">
                Master in-demand skills with expert guidance
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-full bg-white p-4 shadow-md">
              <span className="rounded-full bg-blue-100 p-2 text-blue-500">
                🎯
              </span>
              <p className="font-medium text-gray-800">
                Transform learning experiences for career success
              </p>
            </div>
          </div>
          {/* Enroll Now Button */}
          <ButtonWithIcon text="Enroll now" className="text-nowrap" />
          {/* <button className="rounded-lg bg-blue-600 px-6 py-3 text-lg text-white shadow-lg hover:bg-blue-700">
            Enroll Now →
          </button> */}
        </div>

        {/* Right Content */}
        <div className="relative">
          <img
            src="/bootcampVideo2.png"
            alt="Computer Science Bootcamp"
            className="border-black h-full w-full border pt-40"
            // className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
