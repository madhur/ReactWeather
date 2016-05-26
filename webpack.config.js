// module.exports = {
// 	entry : './js/app.js',
// 	output: {
// 		path: __dirname,
// 		filename: './js/bundle.js'
// 	},

// 	resolve: {
// 		extensions: ['', '.js', '.jsx']
// 	}
// }

var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');

module.exports = {
	entry: [
	'script!jquery/dist/jquery.min.js',
	'script!foundation-sites/dist/foundation.min.js', 
	'./app/app.jsx'
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery'
		}),
		  new ExtractTextPlugin('./public/react-toolbox.css', { allChunks: true })
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},

	resolve: {
		root: __dirname,
		alias: {
			OpenWeatherMap: 'app/api/OpenWeatherMap.jsx',
			ErrorModal: 'app/components/ErrorModal.jsx',
			applicationStyles: 'app/styles/app.scss'
		},
		
		extensions: ['', '.jsx', '.scss',  '.js' ]
	},
	toolbox: {theme: './app/styles/theme.scss'},
	 postcss: [autoprefixer],
	module : {
		loaders: [
			{
				loader: 'babel-loader',
				query : {
					presets: [
						'react', 'es2015'
					]
				},
				test: /\.jsx?$/,
				exclude: /(node_modules| bower_components)/
			},
			{
        		 test: /(\.scss)$/,
        		 loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass?sourceMap'
      		}
		]
	}
}