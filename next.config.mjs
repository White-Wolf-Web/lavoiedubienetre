

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
          destination: 'https://lavoiedubienetre.be/:path*',
          permanent: true,
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  
