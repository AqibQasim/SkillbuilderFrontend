function CartIconSvg({ className, clickHandler }) {
  return (
    <svg
      onClick={clickHandler}
      className={className}
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.91406 6.02344H6.33073L6.40156 6.0376C8.36529 6.0757 10.0811 7.37401 10.6516 9.25344L10.9349 10.2309H25.7107C27.0155 10.2369 28.2545 10.8047 29.1107 11.7893C29.9646 12.7801 30.3424 14.0947 30.1449 15.3876L29.2949 21.2526C29.0118 23.5007 27.1123 25.1945 24.8466 25.2193H16.5166C14.5266 25.2119 12.7741 23.9076 12.1957 22.0034L8.61156 9.91927C8.3371 8.88253 7.40315 8.15741 6.33073 8.14844H4.91406C4.32726 8.14844 3.85156 7.67274 3.85156 7.08594C3.85156 6.49913 4.32726 6.02344 4.91406 6.02344ZM14.2357 21.3234C14.5365 22.3321 15.464 23.0235 16.5166 23.0234H24.8466C26.0191 23.0107 27.0121 22.1553 27.1982 20.9976L28.0482 15.1184C28.164 14.4341 27.9753 13.7333 27.5315 13.1997C27.0877 12.666 26.433 12.3527 25.7391 12.3418H11.5724L14.2357 21.3234Z"
        // fill="black"
        fill="currentcolor"
      />
      <path
        d="M16.1907 26.9193C15.4083 26.9193 14.7741 27.5535 14.7741 28.3359C14.7741 29.1183 15.4083 29.7526 16.1907 29.7526C16.9731 29.7526 17.6074 29.1183 17.6074 28.3359C17.6074 27.5535 16.9731 26.9193 16.1907 26.9193Z"
        fill="currentcolor"
      />
      <path
        d="M24.6907 26.9193C23.9083 26.9193 23.2741 27.5535 23.2741 28.3359C23.2741 29.1183 23.9083 29.7526 24.6907 29.7526C25.4731 29.7526 26.1074 29.1183 26.1074 28.3359C26.1074 27.5535 25.4731 26.9193 24.6907 26.9193Z"
        fill="currentcolor"
      />
    </svg>
  );
}

export default CartIconSvg;
