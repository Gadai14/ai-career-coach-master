/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['i.ytimg.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
};

export default nextConfig;
