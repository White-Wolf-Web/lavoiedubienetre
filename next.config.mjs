// /** @type {import('next').NextConfig} */
//const nextConfig = {};

//export default nextConfig;

module.exports = {
	async redirects() {
		return [
			{
                source: "https://www.lavoiedubienetre.be/:path*",
                destination: "https://lavoiedubienetre.be/:path*",
				permanent: true,
			},
		];
	},
};
