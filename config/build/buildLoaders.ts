import webpack from 'webpack'
import { IBuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildLoaders = ({
	isProd,
	isDev,
}: IBuildOptions): webpack.RuleSetRule[] => {
	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: '/node_modules/',
	}
	const cssLoader = {
		test: /\.css$/i,
		use: ['style-loader', 'css-loader'],
		exclude: '/node_modules/',
	}
	const sassLoader = {
		test: /\.s[ac]ss$/,
		use: [
			isProd ? MiniCssExtractPlugin.loader : 'style-loader',
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes('.module.')),
						localIdentName: isDev
							? '[name]_[local]--[hash:base64:6]'
							: '[hash:base64:8]',
					},
				},
			},
			'sass-loader',
		],
		exclude: '/node_modules/',
	}

	return [tsLoader, cssLoader, sassLoader]
}
