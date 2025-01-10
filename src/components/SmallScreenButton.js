function SmallScreenButton({ className, menu, setMenu }) {
  return (
    <div
      className={`${className} burger-menu flex items-center justify-center xlg:hidden`}
    >
      <button
        className="text-bg_text_gray"
        onClick={() => {
          setMenu((menu) => !menu);
        }}
      >
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={menu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default SmallScreenButton;
