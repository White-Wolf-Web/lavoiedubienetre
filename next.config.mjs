/** @type {import('next').NextConfig} */
const nextConfig = {  async redirects() {
    return [
      {
        source: '/:path*', // Capture tout chemin après le domaine
        destination: 'https://lavoiedubienetre.be/:path*', // Redirige vers la version sans `www`
        permanent: true, // Indique une redirection 301, permanente
        basePath: false, // S'assure que la redirection fonctionne même si basePath est défini
      },
    ];
  },
};

export default nextConfig;



