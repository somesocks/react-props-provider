require('@babel/register')({
    presets: [
			'@babel/preset-env',
			'@babel/preset-react',
		],
		// plugins: [
		// 	'@babel/plugin-proposal-class-properties',
		// 	'@babel/plugin-proposal-object-rest-spread',
		// ],
		exclude: /node_modules/,

		// enabling the cache can cause intermittent failures
		cache: false,
});
