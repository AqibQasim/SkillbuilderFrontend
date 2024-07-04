import React from "react";

const DropDown = ({ text }) => {
  return (
    <div>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className=" text-blue text-xl font-medium outline focus:ring-4 focus:outline-none focus:ring-blue font-medium text-sm   text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue px-5 py-2.5 max-sm:w-full justify-center"
        type="button"
      >
        {text}
        <span className="me-2"></span>
        <svg
          width="14"
          height="28"
          viewBox="0 0 14 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.51471 23.989L10.953 19.7656C11.2652 19.2249 11.2657 18.5588 10.9542 18.0177C10.6428 17.4765 10.0666 17.1423 9.44221 17.1406L4.55387 17.1406C3.9295 17.1423 3.35332 17.4765 3.04186 18.0177C2.7304 18.5588 2.73085 19.2249 3.04304 19.7656L5.48137 23.989C5.79369 24.5315 6.37202 24.8659 6.99804 24.8659C7.62406 24.8659 8.20239 24.5315 8.51471 23.989Z"
            fill="#0048FF"
          />
          <path
            d="M5.48529 4.01104L3.04696 8.23437C2.73477 8.7751 2.73432 9.44119 3.04578 9.98234C3.35724 10.5235 3.93342 10.8577 4.55779 10.8594L9.44613 10.8594C10.0705 10.8577 10.6467 10.5235 10.9581 9.98234C11.2696 9.44119 11.2691 8.7751 10.957 8.23437L8.51863 4.01104C8.20631 3.46849 7.62798 3.13409 7.00196 3.13409C6.37594 3.13409 5.79761 3.46849 5.48529 4.01104Z"
            fill="#0048FF"
          />
        </svg>
      </button>

    </div>
  );
};

export default DropDown;
