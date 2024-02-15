// next.config.mjs
import { NextConfig } from 'next';

/** @type {NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: 'https://www.lavoiedubienetre.be/:path*',
        destination: 'https://lavoiedubienetre.be/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
