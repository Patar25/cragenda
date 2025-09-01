import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.thecocktaildb.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.boulderboets.co.za',
        pathname: '/**',
      }
    ]
  }
};

export default nextConfig;
