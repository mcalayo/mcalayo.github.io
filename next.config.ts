import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [100],
    deviceSizes: [640, 1080, 1920, 2560, 3840],
  },
};

export default nextConfig;
