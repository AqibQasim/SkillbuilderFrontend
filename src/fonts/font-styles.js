import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    {
      path: "./satoshi/satoshi-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./satoshi/satoshi-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./satoshi/satoshi-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./satoshi/satoshi-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./satoshi/satoshi-black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-satoshi",
});
