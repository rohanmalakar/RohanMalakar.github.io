import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optional: Add the basePath for project sites
  // basePath: '/rohanmalakar.github.io' 
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;