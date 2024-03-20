/** @type {import('next').NextConfig} */
const nextConfig = {
    "redirects": [
      {
        "source": "https://www.lavoiedubienetre.be/:path*",
        "destination": "https://lavoiedubienetre.be/:path*",
        "permanent": true
      },{
        "source": "/index.html",
        "destination": "/",
        "permanent": true
      },{
        "source": "/massage-femme-souriante.webp",
        "destination": "/img/massage-femme-souriante.webp",
        "permanent": true
      }
      
    ]
  };

export default nextConfig;
