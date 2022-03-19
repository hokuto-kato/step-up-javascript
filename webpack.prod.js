const { merge } = require("webpack-merge")
const common = require("./webpack.common")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const autoprefixer = require("autoprefixer")
const TerserPlugin = require("terser-webpack-plugin")
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin")
const stepID = "3"
const buildPath = `${__dirname}/docs/${stepID}/`

module.exports = merge(common, {
	mode: "production",
	output: {
		clean: true,
		path: buildPath,
		filename: "./js/[name].[contenthash].js",
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					format: {
						comments: true,
					},
					compress: {
						drop_console: false,
					},
				},
				extractComments: false,
			}),
			new ImageMinimizerPlugin({
				test: /\.(gif)$/i,
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						plugins: [
							["gifsicle", {}],
						],
					},
				},
			}),
			new ImageMinimizerPlugin({
				test: /\.(png)$/i,
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						plugins: [
							[
								"pngquant", {
								speed: 1,
							}]],
					},
				},
			}),
			new ImageMinimizerPlugin({
				test: /\.(jpe?g)$/i,
				minimizer: {
					implementation: ImageMinimizerPlugin.squooshMinify,
					options: {},
				},
			}),
		],
	},
	module: {
		rules: [
			{
				test: /\.(jpe?g|png|gif|svg|webp)$/i,
				type: "asset/resource",
				generator: {
					filename: "./img/[name].[contenthash][ext]",
				},
			},
			{
				test: /\.(json)$/i,
				type: "asset/resource",
				generator: {
					filename: "./data/[name].[contenthash][ext]",
				},
			},
			{
				test: /\.(sass|scss)$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: "css-loader",
						options: {
							url: true,
							sourceMap: false,
							importLoaders: 2,
						},
					},
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [
									autoprefixer({
										grid: true,
										flexbox: true,
									}),
								],
							},
						},
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: false,
						},
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "./css/[name].[contenthash].css",
		}),
	],
})
