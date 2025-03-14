import Image from "next/image";

function SmallScreenSearch({ className }) {
  return (
    <div
      className={`${className} flex w-auto items-center justify-end pr-8 relative bottom-4 -z-10 bg-white py-2  `}
    >
      <div className="flex w-auto gap-2 rounded-md border-[1px] border-border_gray px-4">
        <Image src="/searchIcon.svg" width={20} height={20} alt="Search Icon" />
        <input
          type="text"
          placeholder="Search"
          className="w-full py-2 outline-none"
        />
      </div>
    </div>
  );
}

export default SmallScreenSearch;
