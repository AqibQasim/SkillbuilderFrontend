import Link from "next/link";

function Button({ href, children, className, variant = "primary" }) {
  if (href)
    return (
      <Link
        href={href}
        className={` ${className} rounded-lg px-6 py-2 disabled:cursor-not-allowed ${
          variant === "primary"
            ? "bg-blue text-white hover:bg-blue-600 disabled:bg-blue-400 disabled:text-gray-400"
            : "hover:bg-secondary-600 disabled:bg-secondary-400 bg-secondary text-blue disabled:text-gray-400"
        }`}
      >
        {children}
      </Link>
    );
  return (
    <button
      className={` ${className} rounded-lg px-6 py-2 disabled:cursor-not-allowed ${
        variant === "primary"
          ? "bg-blue text-white hover:bg-blue-600 disabled:bg-blue-400 disabled:text-gray-400"
          : "hover:bg-secondary-600 disabled:bg-secondary-400 bg-secondary text-blue disabled:text-gray-400"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
