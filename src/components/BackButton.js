import Link from "next/link";

const BackButton = ({ children = "Back" }) => {

  return (
    <Link href="/" passHref>
    <button
      // Navigate to the previous page
      className="flex items-center hover:border-[#c9a5a5] justify-center  bg-[#f8f7fa] text-[#170d23] font-normal  rounded-[3.75rem] px-4 py-3 hover:bg-gray-200 transition"
    >
     
      {children}
    </button>
    </Link>
  );
};

export default BackButton;
