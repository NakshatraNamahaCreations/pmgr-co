// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,     // IMPORTANT !!
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
