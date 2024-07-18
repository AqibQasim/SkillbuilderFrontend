import Link from "next/link";

function Button({
  onClick,
  type = "button",
  href,
  children,
  className = "",
  variant = "primary",
  fill = "fill",
}) {
  const variants = {
    fill: {
      primary:
        "border-blue bg-blue text-white hover:border-blue-600 hover:bg-blue-600 disabled:bg-blue-400 disabled:text-gray-400",
      secondary:
        "hover:bg-secondary-600 disabled:bg-secondary-400 border-secondary bg-secondary text-blue disabled:text-gray-400",
    },
    unfill: {
      primary:
        "border-blue bg-transparent text-blue hover:text-white hover:bg-blue",
      secondary:
        "border-secondary bg-transparent text-secondary hover:text-blue",
    },
  };

  const classes = `rounded-lg border text-nowrap px-6 py-2 transition-colors duration-300 disabled:cursor-not-allowed ${className} ${
    variants[fill][variant]
  }`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default Button;
