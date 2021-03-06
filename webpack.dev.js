const { merge } = require("webpack-merge")
const common = require("./webpack.common")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const autoprefixer = require("autoprefixer")
const TerserPlugin = require("terser-webpack-plugin")
const stepID = "3"
const buildPath = `${__dirname}/docs/${stepID}/`

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	optimization: {
		minimize: false,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					format: {
						comments: true,
					},
				},
				extractComments: true,
			}),
		],
	},
	output: {
		clean: true,
		path: buildPath,
		filename: "./js/[name].js",
	},
	module: {
		rules: [
			{
				test: /\.(jpe?g|png|gif|svg|webp)$/i,
				type: "asset/resource",
				generator: {
					filename: "./img/[name][ext]",
				},
			},
			{
				test: /\.(json)$/i,
				type: "asset/resource",
				generator: {
					filename: "./data/[name][ext]",
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
							sourceMap: true,
							importLoaders: 2,
						},
					},
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [
									autoprefixer(),
								],
							},
						},
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.css$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: "css-loader",
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "./css/[name].css",
		}),
	],
})
