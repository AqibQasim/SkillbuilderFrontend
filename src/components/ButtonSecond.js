function ButtonSecond({ className, children, withIcon = false }) {
  return (
    <button
      // #F6EBEB
      className={`${className} ${withIcon ? "flex items-center justify-center gap-4 !py-1.5 !pl-5 !pr-1.5" : ""} button rounded-[2.5rem] bg-gradient-to-br from-[#FFFFFF] from-40% to-[rgba(206,206,206,0.5)] px-5 py-3 font-medium text-[#313131] shadow-[inset_0_0_0_1px_#F6EBEB]`}
    >
      {children}

      {withIcon && (
        <span className="icon flex h-[34px] w-[38px] items-center justify-center rounded-[9.375rem] bg-white">
          <svg
            width="11"
            height="10"
            viewBox="0 0 11 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.25 4.2525L7.6 4.2525L5.12 1.7925C4.83 1.4925 4.83 1.0225 5.12 0.7225C5.41 0.4325 5.89 0.4325 6.18 0.7225L9.95 4.4725C10.23 4.7525 10.23 5.2525 9.95 5.5325L6.18 9.2825C5.89 9.5725 5.41 9.5725 5.12 9.2825C4.98 9.1325 4.9 8.9415 4.9 8.7525C4.9 8.5625 4.98 8.3625 5.12 8.2225L7.6 5.7525L1.25 5.7525C0.83 5.7525 0.5 5.4225 0.5 5.0025C0.5 4.5925 0.83 4.2525 1.25 4.2525Z"
              fill="#0D0D0F"
            />
          </svg>
        </span>
      )}
    </button>
  );
}

export default ButtonSecond;
