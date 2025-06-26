const nextConfig = {
  distDir: './dist',
  webpack: (config) => {
		// camel-case style names from scss modules
		config.module.rules
			.find(({oneOf}) => !!oneOf).oneOf
			.filter(({use}) => JSON.stringify(use)?.includes('css-loader'))
			.reduce((acc, {use}) => acc.concat(use), [])
			.forEach(({options}) => {
				if (options.modules) {
					options.modules.exportLocalsConvention = 'camelCase';
				}
			});
		return config;
	},
	async redirects() {
    return [
      {
        source: "/restaurants/:restaurantId",
        destination: "/restaurants/:restaurantId/menu",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
