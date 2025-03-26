import Image from "next/image";

const CareerHero = ({ studentProfile }) => {
  return (
    <div className="relative overflow-hidden min-h-[440px] sm:min-h-[440px] md:min-h-[450px] lg:min-h-[520px] xl:min-h-[500px]">
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-50 text-center sm:px-4">
        <div className="relative top-16 w-[80%] sm:w-[80%] md:w-[70%] lg:w-[64%] xl:w-[60%]">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-medium text-black font-satoshi ">
            Unlock Your True Potential with
            <span className="text-blue-shade-1 font-semibold font-satoshi"> AI-Powered </span>
            Career Counseling!
          </h1>
          <p className="mt-4 text-gray-600 text-xs sm:text-base font-satoshi">
            Personalized career guidance with the power of AI & expert mentorship.
          </p>

          {/* Button Image with Form Submission */}
          <div className="flex justify-center mt-12 z-40 relative">
            <form
              className="w-full flex justify-center"
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
                    creation_duration_hours: 0,
                    learning_outcomes: "hhfh",
                    category: "development",
                    modulesCount: 0,
                    amount: "25",
                    discount: "0",
                    charges: "0.6",
                    active: false,
                    status: "approved",
                    enrolled_customers: [],
                    image: "c4d72670-b0d7-40e3-9663-f93ca7436f0b.png",
                    rating: null,
                    created_at: "2025-01-08T15:13:39.147Z",
                    updated_at: null,
                    reason: null,
                    status_desc: null,
                    updated_by: null,
                    video_url: "1045027946",
                    skills: null,
                    instructor: {
                      id: 4,
                      user_id: 4,
                      experience: ["web"],
                      specialization: "eevveryyythingg",
                      video_url: "1044981421",
                      status: "pending",
                      created_at: "2025-01-08T12:46:39.537Z",
                      user: {
                        id: 4,
                        first_name: "Sanjay",
                        last_name: "Kumar",
                        email: "sanjaybaghtwani@gmail.com",
                        is_active: true,
                        role: "student",
                      },
                    },
                  },
                ])}
              />
              <button type="submit" className="hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
                <Image src="/button.png" alt="Book Now" width={90} height={90} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerHero;

