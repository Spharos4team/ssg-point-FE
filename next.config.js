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
>>>>>>> d8142e12e16b5e9d35220be00530d3ab18ba4a12

module.exports = nextConfig;
