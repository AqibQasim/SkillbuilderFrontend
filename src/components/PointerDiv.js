import Image from "next/image";

function PointerDiv({ className = "", cursorPosition = "right" }) {
  const cursor = {
    left: "",
    right: "-right-[15px] -top-[28px]",
  };
  return (
    <div
      className={`${className} relative flex max-w-[17.75rem] items-center justify-start gap-[0.625rem] rounded-[3.125rem] bg-white p-[0.625rem] text-left shadow-[inset_0_0_0_1px_#F6EBEB]`}
    >
      <div className={`pointer-icon absolute ${cursor[cursorPosition]}`}>
        <Image src="/cursor.svg" height={48} width={44} />
      </div>
      <span className="rounded-full bg-[#F5F5F5] p-2">
        <Image src="/cup.svg" height={30} width={30} />
      </span>
      <p className="text-sm font-medium">
        Master in-demand skills with expert guidance
      </p>
    </div>
  );
}

export default PointerDiv;
