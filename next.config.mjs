// next.config.mjs
import { NextConfig } from 'next';

/** @type {NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: 'https://www.lavoiedubienetre.be/',
        destination: 'https://lavoiedubienetre.be/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
