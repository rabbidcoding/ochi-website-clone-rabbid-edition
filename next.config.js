/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
	},
	images: {
		formats: ["image/avif", "image/webp"],
		minimumCacheTTL: 31536000,
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
	compress: true,
	poweredByHeader: false,
	webpack: (config, { isServer }) => {
		// Enable WebAssembly module support in Webpack
		config.experiments = {
			...config.experiments,
			asyncWebAssembly: true,
			layers: true,
		};

		return config;
	},
};

module.exports = nextConfig;
