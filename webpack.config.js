const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");

module.exports = {   
	entry: './src/index.js',   
	output: {     
		filename: 'bundle.js',     
		path: path.resolve(__dirname, 'dist'),   
	}, 
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
				  MiniCssExtractPlugin.loader,
				  'css-loader',
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
					use: [
						'file-loader',
					],
				},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader',
				],
			},
			{
		        test: /\.html$/i,
		        loader: 'html-loader',
		    },
		],
	},
	plugins: [    
		new HtmlWebpackPlugin({     
			template: './src/index.html',     
			inject: true,     
			filename: 'index.html'   
		}),   
		new MiniCssExtractPlugin() ,
		new ImageminWebpWebpackPlugin()
	], 
	devServer: {   
		contentBase: path.join(__dirname, 'dist'), 
	},
};
