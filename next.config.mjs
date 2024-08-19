/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "dfstudio-d420.kxcdn.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
