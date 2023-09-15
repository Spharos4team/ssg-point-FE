/** @type {import('next').NextConfig} */
<<<<<<< HEAD
const nextConfig = {};
=======
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
      {
        protocol: "https",
        hostname: "ssgpoint.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SESSION_SECRET: "SSGPOINTAPP04",
  },
};
>>>>>>> 3b2363ca957659b3b4eadfaf8d63e5643c7199e7

module.exports = nextConfig;
