import Image from "next/image";

function PointerDiv({
  className = "",
  pointer = true,
  cursorPosition = "right",
}) {
  const cursor = {
    left: "group is-left -left-[18px] -top-[25px] shadow-[-10px_-20px_81px_rgba(186,186,186,0.3)]",
    right:
      "-right-[15px] -top-[28px] shadow-[10px_20px_81px_rgba(186,186,186,0.3)]",
  };
  return (
    <div
      className={`${className} relative flex max-w-[17.75rem] items-center justify-start gap-[0.625rem] rounded-[3.125rem] bg-white p-[0.625rem] text-left shadow-[inset_0_0_0_1px_#F5F5F5]`}
    >
      {pointer && (
        <div className={`pointer-icon absolute ${cursor[cursorPosition]}`}>
          <Image
            className="group-[.is-left]:-rotate-[75deg]"
            src="/cursor.svg"
            height={48}
            width={44}
          />
        </div>
      )}

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
