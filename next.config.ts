import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: false, // disable LightningCSS, use PostCSS instead
  },
};

export default nextConfig;
