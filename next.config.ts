import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Static export configuration for GitHub Pages fallback
  // Comment out 'output' and 'images.unoptimized' for standard Vercel deployment
  output: process.env.GITHUB_PAGES ? 'export' : undefined,
  images: {
    unoptimized: process.env.GITHUB_PAGES === 'true',
  },
  // GitHub Pages subdirectory support
  basePath: process.env.GITHUB_PAGES ? '' : undefined,
  trailingSlash: true,
};

export default nextConfig;
