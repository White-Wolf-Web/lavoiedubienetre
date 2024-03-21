const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.lavoiedubienetre.be',
          },
        ],
        permanent: true,
        destination: 'https://lavoiedubienetre.be/:path*',
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/massage-femme-souriante.webp',
        destination: '/img/massage-femme-souriante.webp',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;



/*
module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.lavoiedubienetre.be',
          },
        ],
        permanent: true,
        destination: 'https://lavoiedubienetre.be/:path*',
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/massage-femme-souriante.webp',
        destination: '/img/massage-femme-souriante.webp',
        permanent: true,
      },
    ];
  },
};

*/

/** @type {import('next').NextConfig} */