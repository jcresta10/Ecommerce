import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.API_URL || "http://localhost:3007",
  },
  /* config options here */
};

export default nextConfig;
