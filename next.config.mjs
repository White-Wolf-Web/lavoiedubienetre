/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/((?!www).*)', // Tous les chemins sans "www"
          destination: 'https://lavoiedubienetre.be/:path*', // Redirige vers la version sans "www", en conservant le chemin d'accès original
          permanent: true, // Indique une redirection 301, permanente
          has: [
            {
              type: 'host',
              value: 'www.lavoiedubienetre.be',
            },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  