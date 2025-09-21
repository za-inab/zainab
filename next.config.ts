import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://assets.example.com/account123/**"),
      new URL("https://images.unsplash.com/**"),
      new URL("https://img.icons8.com/**"),
    ],
  },
  eslint: {
    // ✅ Ignore ESLint errors during builds (Vercel will not fail)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
