import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://assets.example.com/account123/**"),
      new URL("https://images.unsplash.com/**"),
    ],
  },
};

export default nextConfig;
