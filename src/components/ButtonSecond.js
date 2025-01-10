function ButtonSecond({ className, children }) {
  return (
    <button
      // #F6EBEB
      className={`${className} button rounded-[2.5rem] bg-gradient-to-br from-[#FFFFFF] from-40% to-[rgba(206,206,206,0.5)] px-5 py-3 font-medium text-[#313131] shadow-[inset_0_0_0_1px_#F6EBEB]`}
    >
      {children}
    </button>
  );
}

export default ButtonSecond;
