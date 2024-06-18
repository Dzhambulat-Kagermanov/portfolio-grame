import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { IBuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildPlugins = ({
	paths,
	isProd,
}: IBuildOptions): webpack.WebpackPluginInstance[] => {
	const HTML_WEBPACK_PLUGIN = new HtmlWebpackPlugin({
		template: paths.html,
	})
	const PROGRESS_PLUGIN = new webpack.ProgressPlugin()
	const MINI_CSS_EXTRACT_PLUGIN = new MiniCssExtractPlugin({
		filename: 'css/[name].[contenthash:8].css',
		chunkFilename: 'css/[name].[contenthash:8.css]',
	})

	const plugins: webpack.WebpackPluginInstance[] = [
		HTML_WEBPACK_PLUGIN,
		PROGRESS_PLUGIN,
	]
	if (isProd) {
		plugins.push(MINI_CSS_EXTRACT_PLUGIN)
	}

	return plugins
}
