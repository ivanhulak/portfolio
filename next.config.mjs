/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	typescript: {
		ignoreBuildErrors: true,
	},
	turbopack: {
		rules: {
			'*.svg': {
				loaders: ['@svgr/webpack'],
				as: '*.js',
			},
		},
	},
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
