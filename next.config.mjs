/** @type {import('next').NextConfig} */
const nextConfig = {
    "redirects": [
      {
        "source": "https://www.lavoiedubienetre.be/:path*",
        "destination": "https://lavoiedubienetre.be/:path*",
        "permanent": true
      }
    ]
  };

export default nextConfig;
