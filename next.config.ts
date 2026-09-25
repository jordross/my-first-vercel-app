import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: process.env.GITHUB_PAGES ? 'export' : undefined,
  images: {
    unoptimized: process.env.GITHUB_PAGES === 'true',
  },
  // GitHub Pages serves project sites from /<repo>/, so assets need the prefix there.
  basePath: process.env.GITHUB_PAGES ? '/my-first-vercel-app' : undefined,
  trailingSlash: true,
};

export default nextConfig;
