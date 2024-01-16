const million = require('million/compiler');

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback.fs = false;
		}

		return config;
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'media.graphassets.com',
			},
		],
	},
};

const millionConfig = {
	auto: true,
};

module.exports = million.next(nextConfig, millionConfig);
