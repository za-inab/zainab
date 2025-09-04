import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://assets.example.com/account123/**"),
      new URL("https://images.unsplash.com/**"),
      new URL("https://img.icons8.com/**"),
    ],
  },
};

export default nextConfig;
