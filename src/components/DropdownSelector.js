import PropTypes from "prop-types";
import { useState } from "react";

function DropdownSelector({
  label = "",
  options = [],
  onChange = () => {},
  defaultValue = "",
  defaultLabel = "Select an option",
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  function handleClick(event, value) {
    event.preventDefault(); // Prevent form submission
    setSelectedValue(value);
    onChange(value);
    setIsOpen(false);
  }

  return (
    <div className={`${className} text-black relative inline-block`}>
      {label ? (
        <label
          onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
          className="mb-1 block w-full cursor-pointer text-lg font-medium"
        >
          {label}
          <span className="text-lg text-red-500">*</span>
        </label>
      ) : null}
      <button
        type="button" // Ensure button doesn't trigger form submission
        onClick={(event) => {
          event.preventDefault(); // Prevent form submission
          setIsOpen((prevIsOpen) => !prevIsOpen);
        }}
        className="flex w-full min-w-28 items-center justify-between gap-4 rounded-md border border-dashboard-border px-5 py-4 font-medium capitalize text-status-text shadow-sm transition-colors duration-300"
      >
        {options.find((option) => option.value === selectedValue)?.label ||
          defaultLabel}
      </button>
      {isOpen && (
        <ul className="scrollbar-custom absolute z-10 mt-1 max-h-[12.2rem] w-full overflow-y-auto overflow-x-hidden rounded-md border border-dashboard-border bg-white shadow-lg">
          {options.map((option) => (
            <li key={option.value} className="space-y-2">
              <button
                type="button" // Ensure button doesn't trigger form submission
                onClick={(event) => handleClick(event, option.value)}
                className={`hover:text-black w-full cursor-pointer px-4 py-3 text-left capitalize text-bg_text_gray transition-colors duration-300 hover:bg-dashboard-sidenav-bg lg:px-5 lg:py-3 ${
                  option.value === selectedValue
                    ? "text-black bg-dashboard-sidenav-bg"
                    : ""
                }`}
                disabled={option.value === selectedValue}
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

DropdownSelector.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
  onChange: PropTypes.func,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultLabel: PropTypes.string,
  className: PropTypes.string,
};

export default DropdownSelector;
