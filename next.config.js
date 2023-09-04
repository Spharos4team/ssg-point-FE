/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["storage.googleapis.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/ssg-images/**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SESSION_SECRET: "SSGPOINTAPP04",
  },
};

module.exports = nextConfig;
