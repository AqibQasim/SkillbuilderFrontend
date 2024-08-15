function ChevronRightIconSvg({ className, currentColor }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.21094 20.2099C6.21094 19.8057 6.36462 19.4015 6.67304 19.093L13.9783 11.7888L6.67304 4.48459C6.05725 3.86775 6.05725 2.86775 6.67304 2.25091C7.28989 1.63511 8.28989 1.63511 8.90673 2.25091L17.3278 10.672C17.9436 11.2888 17.9436 12.2888 17.3278 12.9057L8.90673 21.3267C8.28989 21.9425 7.28989 21.9425 6.67304 21.3267C6.36462 21.0183 6.21094 20.6141 6.21094 20.2099Z"
        fill={currentColor ? "currentcolor" : "#888888"}
      />
    </svg>
  );
}

export default ChevronRightIconSvg;
