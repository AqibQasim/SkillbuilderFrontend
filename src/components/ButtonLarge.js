const ButtonLarge = ({
  children,
  variant = "primary",
  onClick,
  type = "button",
  className,
  disabled,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` ${className} w-full rounded-lg p-2 disabled:cursor-not-allowed ${
        variant === "primary"
          ? "bg-blue text-white hover:bg-blue-600 disabled:bg-blue-400 disabled:text-gray-400"
          : "hover:bg-secondary-600 disabled:bg-secondary-400 bg-secondary text-blue disabled:text-gray-400"
      }`}
    >
      {children}
    </button>
  );
};

export default ButtonLarge;
