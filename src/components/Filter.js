import { useRouter } from "next/router";
import { useState } from "react";
import ChevronRightIconSvg from "./ChevronRightIconSvg";

function Filter({ filterField, options }) {
  const router = useRouter();
  const currentFilter = router.query[filterField] || options[0].value;
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(value) {
    const newQuery = { ...router.query, [filterField]: value };

    router.push({
      pathname: router.pathname,
      query: newQuery,
    });
    setIsOpen(false);
  }

  return (
    <div className="relative inline-block text-black">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full min-w-28 items-center justify-between gap-4 border border-dashboard-border px-5 py-2 font-medium capitalize text-status-text shadow-sm transition-colors duration-300"
      >
        {options.find((option) => option.value === currentFilter)?.label ||
          "Select an option"}
        <ChevronRightIconSvg className="h-4 w-4 rotate-90" currentColor />
      </button>
      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full rounded-sm border border-gray-200 bg-white shadow-lg">
          {options.map((option) => (
            <li key={option.value} className="space-y-2">
              <button
                onClick={() => handleClick(option.value)}
                className={`w-full cursor-pointer px-4 py-3 text-left capitalize text-bg_text_gray transition-colors duration-300 hover:bg-dashboard-sidenav-bg hover:text-black lg:px-5 lg:py-3 ${option.value === currentFilter ? "bg-dashboard-sidenav-bg text-black" : ""}`}
                disabled={option.value === currentFilter}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Filter;
