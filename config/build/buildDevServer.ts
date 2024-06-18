import { IBuildOptions } from './types/config'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

export const buildDevServer = (
	options: IBuildOptions
): DevServerConfiguration => {
	const { port } = options
	return {
		port: port || 3000,
		hot: false,
		liveReload: true,
		open: true,
		historyApiFallback: true,
	}
}
