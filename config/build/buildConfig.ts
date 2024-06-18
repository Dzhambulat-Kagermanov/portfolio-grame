import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolve } from './buildResolve'
import { IBuildOptions } from './types/config'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

import webpack from 'webpack'

export const buildWebpack = (options: IBuildOptions): webpack.Configuration => {
	const { mode, paths, isDev, isProd } = options
	return {
		// DEFAULT
		mode: mode ?? 'development',
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.output,
			clean: true,
		},
		// PLUGINS
		plugins: buildPlugins(options),
		// LOADERS
		module: {
			rules: buildLoaders(options),
		},
		// RESOLVE
		resolve: buildResolve(options),
		devtool: isDev ? 'inline-source-map' : false,
		devServer: buildDevServer(options),
	}
}
