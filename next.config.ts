import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Optional: Add the basePath for project sites
  // basePath: '/rohanmalakar.github.io',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;